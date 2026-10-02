# Connect the patient lead form

Destination: https://docs.google.com/spreadsheets/d/1oCC5cvPwlQg861S4XONpVZjhbhcSaHWCVO6QpizLh7Q/edit

The integration creates a **Website Leads** tab on the first successful submission. It does not change existing tabs. It records contact details, clinic requirements, preferred meeting date/time/time zone, submission time, and status. It does not book a calendar event or send an email.

1. Open the spreadsheet with its owner account. Choose **Extensions > Apps Script**.
2. Paste `Code.gs` from this folder into the script editor and save.
3. In **Project Settings > Script properties**, add `LEADS_SECRET`. Set its value to the `GOOGLE_SHEETS_SECRET` value from your local `.env.local`. Keep this value private.
4. Choose **Deploy > New deployment > Web app**. Set **Execute as: Me**, and **Who has access: Anyone**. Authorize access and deploy. The spreadsheet itself can remain private; the script checks the shared secret before writing.
5. Copy the deployment URL ending in `/exec`. Set `GOOGLE_SHEETS_WEB_APP_URL` in `.env.local` to this URL. Do not use the `/dev` testing URL.
6. Restart the development server. For the live website, add both environment variables in your hosting provider’s settings and redeploy. Neither variable should use a `NEXT_PUBLIC_` prefix.
7. Submit a clearly labelled test enquiry at `/us-patient-leads`, then verify the row in **Website Leads**. A successful save shows a confirmation on the form. A failed save shows an error and preserves the entered details.

The server endpoint validates the fields and forwards them to Apps Script. Repeated attempts with the same submission ID do not create duplicate rows. If you edit the script later, deploy a new version under **Deploy > Manage deployments**.

Google’s deployment reference: https://developers.google.com/apps-script/guides/web

## Updated landing-page fields

The form sends optional `Phone` and `Solution` fields. Update `Code.gs` and deploy a new version to capture them. The script appends these columns after the existing `Status` column, preserving existing rows and column positions. Older form submissions remain compatible.

## Automatic thank-you page after booking

The scheduler has no second confirmation button. While it is open, the website checks for a new calendar event every 10 seconds and redirects to `/us-patient-leads/thank-you` after confirmation. This requires the updated Apps Script to be deployed; the old deployment only saves enquiries and cannot report booking status.

1. Replace the deployed Apps Script with the updated `Code.gs`.
2. Add these **Script properties**, keeping the existing `LEADS_SECRET`:
   - `BOOKING_CALENDAR_ID`: the calendar receiving the appointments. Copy **Calendar ID** from Google Calendar → Settings → that calendar → Integrate calendar. The deploying Google account needs access to this calendar's event and guest details.
   - `BOOKING_EVENT_TITLE`: the exact appointment title shown by your booking page, for example `30 min with sales`. The check accepts this title with Google's appended attendee name in parentheses.
3. Select and run `authorizeBookingCalendar` in the editor and grant the requested Calendar access.
4. **Deploy → Manage deployments → Edit → New version → Deploy**. Updating the existing deployment preserves the `/exec` URL.
5. Save a test enquiry and book using the **same email address**. Once Google creates the event, the website should redirect within approximately 10–30 seconds. An existing event, a failed booking, or merely saving the enquiry must not redirect.

The check reads the saved enquiry and calendar; it does not create additional meetings or change existing events. It returns only a booking boolean to the website. It checks upcoming appointments within one year and stops after one hour or when the scheduler closes. Bookings made with a different email cannot be matched automatically.

