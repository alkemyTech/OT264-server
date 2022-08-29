const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const { sendEmail } = require('../utils/sendEmail');
const { emailBienvenida } = require('../views/emailBienvenida');

sgMail
  .send(sendEmail, emailBienvenida)
  .then((response) => {
    console.log(response[0].statusCode);
    console.log(response[0].headers);
  })
  .catch((error) => {
    console.error(error);
  });

module.exports = {
  sgMail
};
