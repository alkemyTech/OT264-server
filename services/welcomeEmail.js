const ejs = require('ejs');
const path = require('path');
const sendEmail = require('../utils/sendEmail');

class WelcomeEmail {
  static async fillerEmail(email, mensajeBienvenida, ongContact) {
    const emailTemplate = await ejs.renderFile(path.join(__dirname, '../views/emailBienvenida.ejs'), {
      mensajeBienvenida: mensajeBienvenida,
      ongContacto: ongContact
    });

    try {
      await sendEmail(email, mensajeBienvenida, 'Welcome Email', emailTemplate);
    } catch (error) {
      return error;
    }
  }
}
module.exports = WelcomeEmail;
