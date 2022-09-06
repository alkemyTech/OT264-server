const ejs = require('ejs');
const path = require('path');
const sendEmail = require('../utils/sendEmail');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const EMAIL_MESSAGE = 'Mail: somosfundacionmas@gmail.com';
const CONTACT_MESSAGE = 'Teléfono de contacto: 1160112988';

class WelcomeEmail {
  static async fillerEmail(email, mensajeBienvenida, ongContact) {
    const emailTemplate = await ejs.renderFile(path.join(__dirname, '../views/emailBienvenida.ejs'), {
      mensajeBienvenida: mensajeBienvenida,
      ongContacto: [EMAIL_MESSAGE, CONTACT_MESSAGE]
    });
    try {
      await sendEmail(email, mensajeBienvenida, 'Welcome Email', emailTemplate);
    } catch (error) {
      return error;
    }
  }
}
module.exports = WelcomeEmail;
