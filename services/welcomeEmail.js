const sgMail = require('@sendgrid/mail');
const ejs = require('ejs');
const path = require('path');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const { sendEmail } = require('../utils/sendEmail');

class WelcomeEmail {
  static async fillerMail(email, mensajeBienvenida, ongcontact) {
    const emailTemplate = await ejs.renderFile(path.join(__dirname, '../views/emailBienvenida.ejs')
    {
      mensajeBienvenida: mensajeBienvenida,
      ongcontact: ongcontact
    })
    await sendEmail(email, 'bienvenido', emailTemplate)

    try {
      let res = await sgMail.send(sendEmail);
      return(res);
    }
    catch (error) {
      return error;
   }
  }
}
module.exports= WellcomeEmail;
