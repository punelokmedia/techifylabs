# Connect the patient enquiry form

The hero form at /us-patient-leads has only Name, Email, Phone, and Message, with one Submit button. After Google Sheets confirms the row was saved, the website redirects to /us-patient-leads/thank-you. Failed submissions keep the entered details and show an error. Google Meet scheduling is disabled.

Destination: https://docs.google.com/spreadsheets/d/1oCC5cvPwlQg861S4XONpVZjhbhcSaHWCVO6QpizLh7Q/edit

## Update the existing integration

1. Open the spreadsheet with its owner account and choose **Extensions > Apps Script**.
2. Replace the script with Code.gs from this folder and save.
3. Keep the LEADS_SECRET script property matching the website's GOOGLE_SHEETS_SECRET.
4. Choose **Deploy > Manage deployments > Edit > New version > Deploy**. Keep **Execute as: Me** and **Who has access: Anyone**. Updating the existing deployment preserves its /exec URL.
5. The website needs GOOGLE_SHEETS_WEB_APP_URL and GOOGLE_SHEETS_SECRET in its server environment. Restart locally or redeploy the website after changing these values. Never use a NEXT_PUBLIC_ prefix.
6. Submit a labelled test enquiry and verify Name, Email, Phone, and Message in the **Website Leads** tab, then verify the thank-you page opens.

The Website Leads tab must contain exactly four headers: Name, Email, Phone, Message. Header order and capitalization can vary; the script maps values by header. Remove all other columns from this tab, including old tracking columns and Solution, if still present. Existing contact rows are preserved. New tabs are created with only these four columns. Retry IDs are cached outside the sheet for up to six hours; Google may evict cache entries earlier, so duplicate prevention is best effort. Deploy the updated script before using the form.

This integration saves to Google Sheets, which can be downloaded as an Excel workbook. It does not write directly to Microsoft Excel. Calendar configuration is no longer required for form submission.
