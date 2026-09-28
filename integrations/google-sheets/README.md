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
