export async function POST(request: Request) {
  const headers = { "Cache-Control": "no-store" };
  let submissionId: unknown;
  try {
    const raw = await request.text();
    if (raw.length > 200) throw new Error("Request too large");
    submissionId = JSON.parse(raw)?.submissionId;
  } catch {
    return Response.json({ booked: false }, { status: 400, headers });
  }
  if (typeof submissionId !== "string" || !/^[a-f0-9-]{36}$/i.test(submissionId)) {
    return Response.json({ booked: false }, { status: 400, headers });
  }
  const endpoint = process.env.GOOGLE_SHEETS_WEB_APP_URL;
  const secret = process.env.GOOGLE_SHEETS_SECRET;
  if (!endpoint || !secret || !/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(endpoint)) {
    return Response.json({ booked: false }, { status: 503, headers });
  }
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, action: "booking-status", submissionId }),
      signal: AbortSignal.timeout(20000),
      cache: "no-store",
      redirect: "follow",
    });
    if (!response.ok) throw new Error("Booking check failed");
    const result = await response.json();
    if (result?.ok !== true) {
      if (result?.code === "SUBMISSION_EXPIRED") {
        return Response.json({ booked: false }, { status: 410, headers });
      }
      const configurationErrors: Record<string, string> = {
        BOOKING_NOT_CONFIGURED: "Set BOOKING_CALENDAR_ID and BOOKING_EVENT_TITLE in Apps Script Project Settings > Script properties, then run authorizeBookingCalendar.",
        BOOKING_CALENDAR_UNAVAILABLE: "Check BOOKING_CALENDAR_ID and the deploying account's access to that calendar. Run authorizeBookingCalendar in Apps Script.",
        SECRET_NOT_CONFIGURED: "Set LEADS_SECRET in Apps Script Script properties to match the server's GOOGLE_SHEETS_SECRET.",
        SECRET_MISMATCH: "The Apps Script LEADS_SECRET and server GOOGLE_SHEETS_SECRET must match.",
        INVALID_REQUEST: "Deploy the current integrations/google-sheets/Code.gs using Manage deployments > Edit > New version > Deploy. If already updated, confirm this enquiry exists in Website Leads in the deployed script's spreadsheet.",
      };
      if (typeof result?.code === "string" && Object.hasOwn(configurationErrors, result.code)) {
        console.error(`[booking-status] ${result.code}: ${configurationErrors[result.code]}`);
        return Response.json({ booked: false }, { status: 503, headers });
      }
      throw new Error("Booking check failed");
    }
    if (typeof result.booked !== "boolean") throw new Error("Invalid booking status");
    return Response.json({ booked: result.booked }, { headers });
  } catch {
    return Response.json({ booked: false }, { status: 502, headers });
  }
}
