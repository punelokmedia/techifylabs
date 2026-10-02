// Techify Labs: paste this entire file into Google Apps Script.
// Set LEADS_SECRET to match GOOGLE_SHEETS_SECRET in your website environment.
// Run verifyLeadSetup, then deploy a Web app as Me with access Anyone.
const SPREADSHEET_ID = "1oCC5cvPwlQg861S4XONpVZjhbhcSaHWCVO6QpizLh7Q";
const TAB_NAME = "Website Leads";
const FIELDS = ["Name", "Email", "Clinic", "Website", "Clinic type", "States", "Monthly leads", "Preferred date", "Time zone", "Preferred time"];
const OPTIONAL_FIELDS = ["Phone", "Solution"];

function verifyLeadSetup() {
  const secret = PropertiesService.getScriptProperties().getProperty("LEADS_SECRET");
  if (!secret || !secret.trim()) throw new Error("Set LEADS_SECRET in Project Settings > Script properties to match GOOGLE_SHEETS_SECRET.");
  if (secret !== secret.trim()) throw new Error("Remove surrounding spaces from LEADS_SECRET.");
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  console.log("Secret configured and spreadsheet accessible. Confirm the secret matches your website environment.");
  return spreadsheet.getId();
}

function jsonReply(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  let stage = "INVALID_REQUEST";
  try {
    if (!e || !e.postData || typeof e.postData.contents !== "string") return jsonReply({ ok: false, code: stage });
    const payload = JSON.parse(e.postData.contents);
    if (!payload || typeof payload !== "object" || Array.isArray(payload)) return jsonReply({ ok: false, code: stage });
    const secret = PropertiesService.getScriptProperties().getProperty("LEADS_SECRET");
    if (!secret) return jsonReply({ ok: false, code: "SECRET_NOT_CONFIGURED" });
    if (payload.secret !== secret) return jsonReply({ ok: false, code: "SECRET_MISMATCH" });
    if (payload.action === "booking-status") return jsonReply(checkBookingStatus(payload.submissionId));
    if (typeof payload.submissionId !== "string" || !/^[a-f0-9-]{36}$/i.test(payload.submissionId)) return jsonReply({ ok: false, code: stage });
    const data = payload.data;
    if (!data || typeof data !== "object" || Array.isArray(data)) return jsonReply({ ok: false, code: stage });
    if (FIELDS.some(field => typeof data[field] !== "string" || data[field].length > 500 || (field !== "Website" && !data[field].trim()))) return jsonReply({ ok: false, code: "INVALID_FIELDS" });
    if (OPTIONAL_FIELDS.some(field => data[field] != null && (typeof data[field] !== "string" || data[field].length > 150))) return jsonReply({ ok: false, code: "INVALID_FIELDS" });

    stage = "SHEET_BUSY";
    lock.waitLock(10000);
    stage = "SPREADSHEET_ACCESS_FAILED";
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    stage = "SHEET_WRITE_FAILED";
    let sheet = spreadsheet.getSheetByName(TAB_NAME);
    if (!sheet) sheet = spreadsheet.insertSheet(TAB_NAME);
    const legacyHeaders = ["Submission ID", "Submitted at (UTC)", ...FIELDS, "Source", "Status"];
    const headers = [...legacyHeaders, ...OPTIONAL_FIELDS];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
      sheet.setFrozenRows(1);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
    } else {
      const existing = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
      if (existing.slice(0, legacyHeaders.length).join("|") === legacyHeaders.join("|") && existing.slice(legacyHeaders.length).every(value => value === "")) {
        sheet.getRange(1, legacyHeaders.length + 1, 1, OPTIONAL_FIELDS.length).setValues([OPTIONAL_FIELDS]).setFontWeight("bold");
      } else if (existing.join("|") !== headers.join("|")) {
        return jsonReply({ ok: false, code: "HEADERS_MISMATCH" });
      }
    }
    // A retry with the same submission ID must not save a duplicate lead.
    if (sheet.getLastRow() > 1 && sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).createTextFinder(payload.submissionId).matchEntireCell(true).findNext()) return jsonReply({ ok: true });
    const safeText = value => /^[=+@\-\t\r\n]/.test(value) ? "'" + value : value;
    sheet.appendRow([payload.submissionId, new Date().toISOString(), ...FIELDS.map(field => safeText(data[field])), "/us-patient-leads", "New", ...OPTIONAL_FIELDS.map(field => safeText(data[field] || ""))]);
    SpreadsheetApp.flush();
    return jsonReply({ ok: true });
  } catch {
    console.error("Patient lead request failed: " + stage);
    return jsonReply({ ok: false, code: stage });
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}

// Booking confirmation requires BOOKING_CALENDAR_ID and BOOKING_EVENT_TITLE.
function checkBookingStatus(submissionId) {
  if (typeof submissionId !== "string" || !/^[a-f0-9-]{36}$/i.test(submissionId)) return { ok: false, code: "INVALID_REQUEST" };
  const properties = PropertiesService.getScriptProperties();
  const calendarId = properties.getProperty("BOOKING_CALENDAR_ID");
  const eventTitle = properties.getProperty("BOOKING_EVENT_TITLE");
  if (!calendarId || !eventTitle) return { ok: false, code: "BOOKING_NOT_CONFIGURED" };
  const cache = CacheService.getScriptCache();
  const key = "booking:" + submissionId;
  const cached = cache.get(key);
  if (cached) return { ok: true, booked: cached === "booked" };
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(TAB_NAME);
  if (!sheet || sheet.getLastRow() < 2) return { ok: false, code: "INVALID_REQUEST" };
  const match = sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).createTextFinder(submissionId).matchEntireCell(true).findNext();
  if (!match) return { ok: false, code: "INVALID_REQUEST" };
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const values = sheet.getRange(match.getRow(), 1, 1, headers.length).getValues()[0];
  const email = String(values[headers.indexOf("Email")] || "").trim().toLowerCase();
  const created = new Date(values[headers.indexOf("Submitted at (UTC)")]).getTime();
  const now = Date.now();
  if (!email || !Number.isFinite(created)) return { ok: false, code: "INVALID_REQUEST" };
  if (now - created > 60 * 60 * 1000) return { ok: false, code: "SUBMISSION_EXPIRED" };
  const calendar = CalendarApp.getCalendarById(calendarId);
  if (!calendar) return { ok: false, code: "BOOKING_CALENDAR_UNAVAILABLE" };
  const events = calendar.getEvents(new Date(now), new Date(now + 366 * 24 * 60 * 60 * 1000));
  const booked = events.some(event => {
    if (event.getDateCreated().getTime() < created || event.isAllDayEvent()) return false;
    const title = event.getTitle();
    if (title !== eventTitle && !title.startsWith(eventTitle + " (")) return false;
    return event.getGuestList().some(guest => guest.getEmail().trim().toLowerCase() === email);
  });
  cache.put(key, booked ? "booked" : "pending", booked ? 3600 : 10);
  return { ok: true, booked };
}

function authorizeBookingCalendar() {
  const calendarId = PropertiesService.getScriptProperties().getProperty("BOOKING_CALENDAR_ID");
  if (!calendarId) throw new Error("Set BOOKING_CALENDAR_ID in Script properties first.");
  const calendar = CalendarApp.getCalendarById(calendarId);
  if (!calendar) throw new Error("The deploying account cannot access the booking calendar.");
  calendar.getEvents(new Date(), new Date(Date.now() + 24 * 60 * 60 * 1000));
  console.log("Booking calendar access verified.");
}
