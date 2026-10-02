const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const source = fs.readFileSync(require("node:path").join(__dirname, "Code.gs"), "utf8");
const id = "12345678-1234-4234-8234-123456789abc";

function fixture(options = {}) {
  const created = Date.now() - (options.expired ? 7200000 : 60000);
  const properties = {
    LEADS_SECRET: "test-secret",
    BOOKING_CALENDAR_ID: "test-calendar",
    BOOKING_EVENT_TITLE: "30 min with sales",
    ...options.properties,
  };
  let reads = 0;
  const writes = [];
  const cache = new Map();
  const event = {
    getDateCreated: () => new Date(created + (options.oldEvent ? -1000 : 1000)),
    isAllDayEvent: () => false,
    getTitle: () => options.title || "30 min with sales (Test Visitor)",
    getGuestList: () => [{ getEmail: () => options.email || "VISITOR@example.com" }],
  };
  const sheet = {
    getLastRow: () => 2,
    getLastColumn: () => 3,
    getRange: (row, column) => ({
      createTextFinder: () => ({ matchEntireCell() { return this; }, findNext: () => options.missing ? null : { getRow: () => 2 } }),
      getValues: () => [row === 1 ? ["Submission ID", "Submitted at (UTC)", "Email"] : [id, new Date(created).toISOString(), "visitor@example.com"]],
    }),
  };
  const context = vm.createContext({
    console,
    PropertiesService: { getScriptProperties: () => ({ getProperty: key => properties[key] }) },
    CacheService: { getScriptCache: () => ({ get: key => cache.get(key), put: (key, value, ttl) => { cache.set(key, value); writes.push({ value, ttl }); } }) },
    SpreadsheetApp: { openById: () => ({ getSheetByName: () => sheet }) },
    CalendarApp: { getCalendarById: () => options.inaccessible ? null : { getEvents: () => { reads++; return options.noEvents ? [] : [event]; } } },
    LockService: { getScriptLock: () => ({ hasLock: () => false }) },
    ContentService: { MimeType: { JSON: "json" }, createTextOutput: value => ({ setMimeType: () => JSON.parse(value) }) },
  });
  vm.runInContext(source, context);
  return { check: () => JSON.parse(JSON.stringify(context.checkBookingStatus(id))), context, reads: () => reads, writes };
}

test("a new consultation with the saved email confirms booking and caches it", () => {
  const f = fixture();
  assert.deepEqual(f.check(), { ok: true, booked: true });
  assert.deepEqual(f.check(), { ok: true, booked: true });
  assert.equal(f.reads(), 1);
  assert.deepEqual(f.writes, [{ value: "booked", ttl: 3600 }]);
});

for (const [label, options] of [
  ["existing event", { oldEvent: true }],
  ["another attendee", { email: "another@example.com" }],
  ["unrelated appointment", { title: "Different meeting" }],
  ["saved enquiry without a booking", { noEvents: true }],
]) {
  test(label + " must not confirm booking", () => {
    assert.deepEqual(fixture(options).check(), { ok: true, booked: false });
  });
}

for (const [label, options, code] of [
  ["unconfigured calendar", { properties: { BOOKING_CALENDAR_ID: null } }, "BOOKING_NOT_CONFIGURED"],
  ["inaccessible calendar", { inaccessible: true }, "BOOKING_CALENDAR_UNAVAILABLE"],
  ["unknown enquiry", { missing: true }, "INVALID_REQUEST"],
  ["expired enquiry", { expired: true }, "SUBMISSION_EXPIRED"],
]) {
  test(label + " must not confirm booking", () => {
    assert.deepEqual(fixture(options).check(), { ok: false, code });
  });
}

test("booking status requires the server secret", () => {
  const f = fixture();
  const result = f.context.doPost({ postData: { contents: JSON.stringify({ secret: "wrong", action: "booking-status", submissionId: id }) } });
  assert.deepEqual(result, { ok: false, code: "SECRET_MISMATCH" });
  assert.equal(f.reads(), 0);
});

const ts = require("typescript");
const routeSource = fs.readFileSync(require("node:path").join(__dirname, "../../app/api/patient-leads/booking-status/route.ts"), "utf8");
const routeCode = ts.transpileModule(routeSource, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;

async function checkRoute(upstream, options = {}) {
  let calls = 0;
  const context = vm.createContext({
    exports: {}, Response, AbortSignal,
    console: { error() {} },
    process: { env: { GOOGLE_SHEETS_WEB_APP_URL: "https://script.google.com/macros/s/test/exec", GOOGLE_SHEETS_SECRET: "test-secret" } },
    fetch: async (_url, request) => {
      calls++;
      assert.deepEqual(JSON.parse(request.body), { secret: "test-secret", action: "booking-status", submissionId: id });
      return Response.json(upstream);
    },
  });
  vm.runInContext(routeCode, context);
  const response = await context.exports.POST(new Request("https://example.com/api/patient-leads/booking-status", { method: "POST", body: options.body || JSON.stringify({ submissionId: id }) }));
  return { status: response.status, data: await response.json(), calls, cache: response.headers.get("Cache-Control") };
}

test("API returns only the confirmed boolean without caching", async () => {
  assert.deepEqual(await checkRoute({ ok: true, booked: true, email: "private@example.com" }), { status: 200, data: { booked: true }, calls: 1, cache: "no-store" });
});

test("API keeps pending bookings on the scheduler", async () => {
  assert.equal((await checkRoute({ ok: true, booked: false })).data.booked, false);
});

test("API stops polling when the deployed script needs updating", async () => {
  assert.equal((await checkRoute({ ok: false, code: "INVALID_REQUEST" })).status, 503);
});

test("API stops polling when an enquiry expires", async () => {
  assert.equal((await checkRoute({ ok: false, code: "SUBMISSION_EXPIRED" })).status, 410);
});

test("API rejects malformed IDs without calling Google", async () => {
  const result = await checkRoute({}, { body: JSON.stringify({ submissionId: "invalid" }) });
  assert.equal(result.status, 400);
  assert.equal(result.calls, 0);
});

test("API must not confirm a malformed upstream response", async () => {
  const result = await checkRoute({ ok: true, booked: "true" });
  assert.equal(result.status, 502);
  assert.equal(result.data.booked, false);
});
