const ejs = require('ejs');
const path = require('path');
const { sendEmail } = require('../utils/sendEmail');

class WelcomeEmail {
  static async fillerEmail(email, mensajeBienvenida, ongcontact) {
    const emailTemplate = await ejs.renderFile(path.join(__dirname, '../views/emailBienvenida.ejs'), {
      mensajeBienvenida: mensajeBienvenida,
      ongContacto: ongcontact
    });
    try {
      await sendEmail(email, 'bienvenido', emailTemplate);
    } catch (error) {
      return error;
    }
  }
}
module.exports = WelcomeEmail;
