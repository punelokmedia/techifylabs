// Paste this file into Extensions > Apps Script in the destination spreadsheet.
// Set LEADS_SECRET in Project Settings > Script properties before deploying.
const SPREADSHEET_ID = "1oCC5cvPwlQg861S4XONpVZjhbhcSaHWCVO6QpizLh7Q";
const TAB_NAME = "Website Leads";
const FIELDS = ["Name", "Email", "Clinic", "Website", "Clinic type", "States", "Monthly leads", "Preferred date", "Time zone", "Preferred time"];

function doPost(e) {
  const reply = value => ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
  const lock = LockService.getScriptLock();
  let stage = "INVALID_REQUEST";
  try {
    const payload = JSON.parse(e.postData.contents);
    const secret = PropertiesService.getScriptProperties().getProperty("LEADS_SECRET");
    if (!secret) return reply({ ok: false, code: "SECRET_NOT_CONFIGURED" });
    if (payload.secret !== secret) return reply({ ok: false, code: "SECRET_MISMATCH" });
    if (!/^[a-f0-9-]{36}$/i.test(payload.submissionId || "") || !payload.data) return reply({ ok: false, code: "INVALID_REQUEST" });
    if (FIELDS.some(field => typeof payload.data[field] !== "string" || payload.data[field].length > 500 || (field !== "Website" && !payload.data[field].trim()))) return reply({ ok: false, code: "INVALID_FIELDS" });
    stage = "SHEET_BUSY";
    lock.waitLock(10000);
    stage = "SPREADSHEET_ACCESS_FAILED";
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    stage = "SHEET_WRITE_FAILED";
    let sheet = spreadsheet.getSheetByName(TAB_NAME);
    if (!sheet) sheet = spreadsheet.insertSheet(TAB_NAME);
    const headers = ["Submission ID", "Submitted at (UTC)", ...FIELDS, "Source", "Status"];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
      sheet.setFrozenRows(1);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
    } else if (sheet.getRange(1, 1, 1, headers.length).getValues()[0].join("|") !== headers.join("|")) {
      return reply({ ok: false, code: "HEADERS_MISMATCH" });
    }
    // Retrying the same submission after a network timeout must not add a duplicate.
    if (sheet.getLastRow() > 1 && sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).createTextFinder(payload.submissionId).matchEntireCell(true).findNext()) return reply({ ok: true });
    // Keep user input as text, including values that could otherwise become formulas.
    const safeText = value => /^[=+@\-\t\r\n]/.test(value) ? "'" + value : value;
    sheet.appendRow([payload.submissionId, new Date().toISOString(), ...FIELDS.map(field => safeText(payload.data[field])), "/us-patient-leads", "New"]);
    SpreadsheetApp.flush();
    return reply({ ok: true });
  } catch {
    console.error("Patient lead save failed: " + stage);
    return reply({ ok: false, code: stage });
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}
