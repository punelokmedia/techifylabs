const fields = ["Name", "Email", "Clinic", "Website", "Clinic type", "States", "Monthly leads", "Preferred date", "Time zone"] as const;

export async function POST(request: Request) {
  const endpoint = process.env.GOOGLE_SHEETS_WEB_APP_URL;
  const secret = process.env.GOOGLE_SHEETS_SECRET;
  if (!endpoint || !secret) {
    return Response.json({ error: "Meeting requests are temporarily unavailable. Please email info@techifylabs.in." }, { status: 503 });
  }
  if (!/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(endpoint)) {
    return Response.json({ error: "Meeting requests are temporarily unavailable. Please email info@techifylabs.in." }, { status: 503 });
  }
  let input: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > 10000) return Response.json({ error: "Submission is too large." }, { status: 413 });
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid data");
    input = parsed;
  } catch {
    return Response.json({ error: "Please check your form and try again." }, { status: 400 });
  }
  const data: Record<string, string> = {};
  for (const field of fields) {
    if (field === "Website" && input[field] == null) {
      data[field] = "";
      continue;
    }
    if (typeof input[field] !== "string" || (input[field] as string).length > 500) {
      return Response.json({ error: `Please check ${field.toLowerCase()}.` }, { status: 400 });
    }
    data[field] = (input[field] as string).trim();
    if (field !== "Website" && !data[field]) return Response.json({ error: `Please enter ${field.toLowerCase()}.` }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.Email) ||
      !["IVF & Fertility", "Hair Transplant", "IVF & Hair Transplant"].includes(data["Clinic type"]) ||
      !["Under 50", "50–100", "100–250", "250+", "Let’s discuss"].includes(data["Monthly leads"]) ||
      !["Eastern Time (ET)", "Central Time (CT)", "Mountain Time (MT)", "Pacific Time (PT)", "India Standard Time (IST)"].includes(data["Time zone"]) ||
      !/^\d{4}-\d{2}-\d{2}$/.test(data["Preferred date"]) ||
      !Number.isFinite(Date.parse(data["Preferred date"]))) {
    return Response.json({ error: "Please check your email and meeting preferences." }, { status: 400 });
  }
  for (const field of ["Phone", "Solution"] as const) {
    const value = input[field] ?? "";
    if (typeof value !== "string" || value.length > 150) {
      return Response.json({ error: `Please check ${field.toLowerCase()}.` }, { status: 400 });
    }
    data[field] = value.trim();
  }
  if (data.Solution && !["Patient Leads", "Booked Appointment Solution", "Patient Leads & Booked Appointments"].includes(data.Solution)) {
    return Response.json({ error: "Please choose a valid solution." }, { status: 400 });
  }
  if (data.Website) {
    try {
      if (!/^[a-z][a-z\d+.-]*:/i.test(data.Website)) {
        data.Website = `https://${data.Website}`;
      }
      if (!["https:", "http:"].includes(new URL(data.Website).protocol)) throw new Error("Invalid URL");
    } catch {
      return Response.json({ error: "Please enter a valid website URL." }, { status: 400 });
    }
  }
  // Preserve the existing sheet column and deployed Apps Script contract.
  data["Preferred time"] = "Selected in Google Calendar";
  const id = input.submissionId;
  if (typeof id !== "string" || !/^[a-f0-9-]{36}$/i.test(id)) {
    return Response.json({ error: "Please refresh this page and try again." }, { status: 400 });
  }
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, submissionId: id, data }),
      signal: AbortSignal.timeout(20000),
      cache: "no-store",
      redirect: "follow",
    });
    if (!response.ok) {
      console.error(`[patient-leads] Google deployment returned HTTP ${response.status}. Check deployment access and execution permissions.`);
      throw new Error("Google deployment rejected request");
    }
    let result;
    try {
      result = await response.json();
    } catch {
      console.error("[patient-leads] Google returned a non-JSON response. Check that the URL points to the deployed web app and that access is Anyone.");
      throw new Error("Invalid deployment response");
    }
    if (result?.ok !== true) {
      const reasons: Record<string, string> = {
        SECRET_NOT_CONFIGURED: "Add LEADS_SECRET in the deployed Apps Script project's Script properties.",
        SECRET_MISMATCH: "LEADS_SECRET does not match GOOGLE_SHEETS_SECRET on this server. Copy the value exactly, without quotes or spaces.",
        INVALID_REQUEST: "Apps Script rejected the request format. Confirm the deployed script matches Code.gs.",
        INVALID_FIELDS: "Apps Script rejected one or more form fields. Confirm the deployed script matches Code.gs.",
        SHEET_BUSY: "The spreadsheet is busy. Retry shortly.",
        SPREADSHEET_ACCESS_FAILED: "The deploying Google account cannot open the spreadsheet. Check the spreadsheet ID and account permissions.",
        SHEET_WRITE_FAILED: "Apps Script could not write to the sheet. Check edit permissions and protected ranges.",
        HEADERS_MISMATCH: "Website Leads has different column headers. Rename that tab to preserve it; the next submission will create a new Website Leads tab.",
      };
      const code = typeof result?.code === "string" && Object.hasOwn(reasons, result.code) ? result.code : "UNKNOWN_SCRIPT_ERROR";
      console.error(`[patient-leads] ${code}: ${reasons[code] ?? "The deployed script returned no diagnostic code. Paste the updated Code.gs and deploy a new version."}`);
      throw new Error("Sheet did not confirm saving");
    }
    return Response.json({ ok: true });
  } catch (error) {
    if (error instanceof Error && ["TimeoutError", "AbortError", "TypeError"].includes(error.name)) {
      console.error(`[patient-leads] Google connection failed (${error.name}). Check network access or retry after a timeout.`);
    }
    return Response.json({ error: "We couldn’t confirm your request was saved. Please try again or email info@techifylabs.in." }, { status: 502 });
  }
}
