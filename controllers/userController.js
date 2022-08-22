const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

class UserController {
  async sendEmail(email, subject, body) {
    const msg = {
      to: email, // Change to your recipient
      from: 'cristianlav10@gmail.com', // Change to your verified sender
      subject: subject,
      text: body
    };

    const response = sgMail.send(msg);
    return response;
  }
}

module.exports = UserController;
