const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(email, subject, body, html) {
  const msg = {
    to: email,
    from: process.env.SENDGRID_FROM,
    subject: subject,
    text: body,
    html: html
  };
  const response = sgMail.send(msg);
  return response;
}
module.exports = sendEmail;
