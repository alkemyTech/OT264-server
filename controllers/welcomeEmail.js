const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//const { text } = require('express');
const { sendEmail } = require('../utils/sendEmail');
//const { emailTemplate } = require('../views/emailBienvenida.ejs');
const ejs = require('ejs');

class WellcomeEmail {
  static async fillerEmail(email, name, ongContact) {
    const emailTemplate = await ejs.renderFile(path.join(__dirname, '../views/emailBienvenida.ejs'));
    {
      mensajeBienvenida:text
      ongContact = [instagram, facebook, mail, telefono]
    }
    await sendEmail(email, 'bienvenido', emailTemplate);
  }
  //console.log('mail enviado');
}

module.exports = WellcomeEmail

