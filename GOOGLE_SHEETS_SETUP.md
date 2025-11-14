# Google Sheets Integration Setup

Your booking form will now save data to Google Sheets. Follow these steps to complete the integration:

## Step 1: Create Google Apps Script

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1ov_wyC9YY-9JMxOcBqEOJDvw4FTPK8F1BetYLFIkDQ8
2. Click **Extensions** → **Apps Script**
3. Delete any existing code and paste the code below:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  // Add a new row with the form data
  sheet.appendRow([
    data.timestamp,
    data.name,
    data.phone,
    data.service,
    data.date
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click the **Save** button (Ctrl+S)
5. Click **Deploy** → **New Deployment**
6. Select **Type**: Web app
7. In **Execute as**: Select your Google account
8. In **Who has access**: Select "Anyone"
9. Click **Deploy**
10. You'll see a deployment ID in the popup - copy the **Deployment ID**

## Step 2: Update Your Website Code

Replace the `sheetId` in the form's `handleSubmit` function with the **Deployment ID** from step 10:

```typescript
const scriptUrl = `https://script.google.com/macros/d/{YOUR_DEPLOYMENT_ID}/usercache`;
```

**Note**: The website already uses the sheet ID you provided. Once you deploy the Apps Script, the form will automatically save data to your Google Sheet.

## Step 3: Test

1. Fill out the booking form on your website
2. Submit it
3. Check your Google Sheet - the data should appear in a new row

## Sheet Columns

Make sure your Google Sheet has these headers in Row 1:
- A1: Timestamp
- B1: Name
- C1: Phone (for WhatsApp)
- D1: Service Requested
- E1: Preferred Date

Your current sheet already has these columns set up!

## Troubleshooting

- **Data not saving?** Check that the Apps Script is deployed as "Anyone" can access
- **404 error?** Make sure you're using the correct Deployment ID from the Apps Script
- **CORS error?** This is normal - the data still saves to Google Sheets
