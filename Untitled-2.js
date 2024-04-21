// Run this function to create the trigger
function createTrigger() {
  var ss = SpreadsheetApp.getActive();
  ScriptApp.newTrigger('sendEmailNotification')
      .forSpreadsheet(ss)
      .onEdit()
      .create();
}

function getSalesEmails() {
  var salesEmails = {
    "A": "salesperson1@example.com",
    "B": "salesperson2@example.com",
    // Add more sales people here in the "Initials": "Email" format
  };
  return salesEmails;
}

function sendEmailNotification(e) {
  var range = e.range;
  var sheet = range.getSheet();
  if(sheet.getName() != "SheetName") { // Replace SheetName with your sheet name
    return;
  }

  var columnOfCellEdited = range.getColumn();
  // If it's not the specific column, stop execution. (Change the column number as per your requirements)
  if(columnOfCellEdited !== 5) {
    return;
  }

  var rowOfCellEdited = range.getRow();
  var salesEmails = getSalesEmails();
  
  var salesPerson = sheet.getRange(rowOfCellEdited, 1).getValue();
  if(salesPerson.includes("/")) {
    salesPerson = salesPerson.split("/")[1];  // Get the sales rep after the slash
  }
  if (!(salesPerson in salesEmails)) {
    return;  // If there's no mapping for this person, stop execution
  }
  
  var recipient = salesEmails[salesPerson];  // Use the email from the mapping
  var subject;
  var body;



  MailApp.sendEmail({
    to: recipient,
    subject: subject,
    body: body.replace(/<[^>]*>/g, ''),  // Remove the HTML tags for the plain text body
    htmlBody: body
  });
}
