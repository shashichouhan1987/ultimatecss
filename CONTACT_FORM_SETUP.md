# Contact Form Setup — Gmail Notifications + Free Database

The contact form on `contact.html` is wired to send submissions to a **Google Apps Script Web App**. This is 100% free, needs no server, and gives you:

1. **Gmail notification** — an email lands in your inbox every time someone fills the form (with a Reply-To set to the visitor's email, so you can reply in one click).
2. **Free database** — every submission is saved as a row in a **Google Sheet**, so you keep all records forever and can filter/export them.

Total setup time: ~5 minutes.

---

## Step 1 — Create the Google Sheet (your database)

1. Go to [sheets.google.com](https://sheets.google.com) and create a blank spreadsheet.
2. Name it something like `UltimateCSS — Contact Submissions`.
3. Copy the **Sheet ID** from the URL. It's the long string between `/d/` and `/edit`:

   ```
   https://docs.google.com/spreadsheets/d/  1AbC...xYz  /edit
                                            ^^^^^^^^^^^ this part
   ```

You don't need to create any columns — the script creates a `Submissions` tab with headers (Timestamp, Name, Email, Services, Budget, Message, Page) automatically on the first submission.

## Step 2 — Create the Apps Script

1. Go to [script.google.com](https://script.google.com) and click **New project**.
2. Delete the placeholder code and paste in the full contents of [`apps-script/Code.gs`](apps-script/Code.gs) from this repository.
3. At the top of the script, edit the two config values:
   - `NOTIFY_EMAIL` → your Gmail address (where notifications should arrive).
   - `SHEET_ID` → the Sheet ID you copied in Step 1.
4. Save the project (name it e.g. `Contact Form Handler`).

## Step 3 — Deploy as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set:
   - **Execute as:** `Me`
   - **Who has access:** `Anyone` (required so the form on your website can post to it — the URL is unguessable and the script only accepts form data).
4. Click **Deploy**, then **Authorize access** and allow the permissions (Gmail send + Sheets). If Google shows an "unverified app" warning, click *Advanced → Go to project* — it's your own script, this is expected.
5. Copy the **Web app URL** (it looks like `https://script.google.com/macros/s/AKfycb.../exec`).

## Step 4 — Connect the website

1. Open `contact.html` and find this line near the bottom:

   ```js
   const CONTACT_FORM_ENDPOINT = 'PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE';
   ```

2. Replace the placeholder with your Web app URL from Step 3.
3. Done. Submit the form once yourself to test — you should get the email and see a new row in the sheet.

---

## Updating the script later

If you ever edit `Code.gs`, you must publish the change: **Deploy → Manage deployments → ✏️ Edit → Version: New version → Deploy**. The URL stays the same.

## Notes & limits

- **Cost:** free. Google Apps Script's free tier allows ~100 emails/day for personal Gmail accounts — far more than a contact form needs.
- **Spam:** the script validates required fields; for extra protection you can add a hidden honeypot field or reCAPTCHA later.
- **Alternatives** if you ever outgrow this:
  - [Formspree](https://formspree.io) / [Web3Forms](https://web3forms.com) — free tiers, email notifications, zero code.
  - [Supabase](https://supabase.com) or [Firebase](https://firebase.google.com) — free-tier hosted databases (Postgres / NoSQL) if you want a "real" database with an API.
