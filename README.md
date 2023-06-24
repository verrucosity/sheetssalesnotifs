Google Sheets On-Edit Email Notification System
This project contains a Google Apps Script that sends automated email notifications to salespeople based on specific edits made in a Google Spreadsheet.

Script Functionality
The script consists of three primary functions:

createTrigger(): Sets up an on-edit trigger that calls the sendEmailNotification() function each time an edit is made in the Google Spreadsheet.

getSalesEmails(): Returns a JavaScript object that maps salesperson initials to their email addresses.

sendEmailNotification(e): Triggered by edits to a specific sheet in the current spreadsheet, this function sends email notifications to the appropriate salesperson. It identifies the salesperson based on the cell value, constructs an email message, and sends the email.

Usage
Replace the placeholder values in getSalesEmails() and sendEmailNotification(e) with your actual data. The script assumes that salesperson initials are stored in the first column of each row and that triggering edits are made in the fifth column.

In createTrigger(), sendEmailNotification is set to trigger when the spreadsheet is edited.

In the Google Sheets script editor, run the createTrigger() function to create the trigger.

Dependencies
This script relies on the Google Apps Script environment and uses the SpreadsheetApp, ScriptApp, and MailApp services.

Contribution
Feel free to fork the project, make updates, and submit a pull request. If you encounter any issues or have questions, open an issue on GitHub.

License
Open-source, free to use, and modify.
