const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const { sendEmail } = require('../utils/sendEmail');
const { emailBienvenida } = require('../views/emailBienvenida');

class WellcomeEmail {
  static async fillerEmailAndSend(email, name, contact) {
    await sendEmail(email, 'bienvenido', emailBienvenida);
    console.log('mail enviado');
  }
}

module.exports = WellcomeEmail;
