/**
 * UltimateCSS Contact Form backend — Google Apps Script Web App.
 *
 * What it does on every form submission:
 *   1. Appends the record to a Google Sheet (your free database).
 *   2. Sends an email notification to your Gmail inbox.
 *
 * Setup instructions: see CONTACT_FORM_SETUP.md in the repository root.
 */

// ======================= CONFIGURATION =======================

// The Gmail address that should receive the notification emails.
var NOTIFY_EMAIL = 'ultimatecss1987@gmail.com';

// ID of the Google Sheet used to store submissions. It is the long
// string in the sheet URL: https://docs.google.com/spreadsheets/d/<SHEET_ID>/edit
var SHEET_ID = '1niTQSzwXh4lIgugq-2aax2ON4TBBftnONTZZXXXAWzw';

// Name of the tab inside the sheet where rows are appended.
var SHEET_TAB = 'Submissions';

// ==============================================================

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var name = String(data.name || '').trim();
    var email = String(data.email || '').trim();
    var message = String(data.message || '').trim();
    var budget = String(data.budget || '').trim();
    var services = Array.isArray(data.services) ? data.services.join(', ') : String(data.services || '');
    var page = String(data.page || '');

    if (!name || !email || !message) {
      return jsonResponse({ status: 'error', message: 'Missing required fields.' });
    }

    saveToSheet([new Date(), name, email, services, budget, message, page]);
    sendNotificationEmail(name, email, services, budget, message);

    return jsonResponse({ status: 'success' });
  } catch (err) {
    return jsonResponse({ status: 'error', message: String(err) });
  }
}

function saveToSheet(row) {
  var spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  var sheet = spreadsheet.getSheetByName(SHEET_TAB);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_TAB);
    sheet.appendRow(['Timestamp', 'Name', 'Email', 'Services', 'Budget', 'Message', 'Page']);
    sheet.getRange('A1:G1').setFontWeight('bold');
  }
  sheet.appendRow(row);
}

function sendNotificationEmail(name, email, services, budget, message) {
  var subject = 'New inquiry from ' + name + ' — UltimateCSS contact form';
  var body =
    'You received a new contact form submission:\n\n' +
    'Name:     ' + name + '\n' +
    'Email:    ' + email + '\n' +
    'Services: ' + (services || '—') + '\n' +
    'Budget:   ' + (budget || '—') + '\n\n' +
    'Message:\n' + message + '\n\n' +
    'Reply directly to this email to answer ' + name + '.';

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    replyTo: email,
    subject: subject,
    body: body
  });
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
