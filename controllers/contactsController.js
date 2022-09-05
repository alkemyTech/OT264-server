const { Contacts } = require('../models');
const sendEmail = require('../utils/sendEmail');
const ejs = require('ejs');
const path = require('path');

class ContactsController {
  static async create(req, res) {
    const { name, phone, email, message } = req.body;
    const data = { name, phone, email, message };
    let newContact;
    try {
      newContact = await Contacts.create(data);

      const html = await ejs.renderFile(path.join(__dirname, '../views/emailBienvenida.ejs'), {
        mensajeBienvenida: 'Agradecemos su contacto con nosotros, nos comunicaremos lo más pronto posible',
        ongContacto: ['Mail: somosfundacionmas@gmail.com', 'Teléfono de contacto: 1160112988']
      });

      const subject = 'Formulario de contacto registrado exitosamente';
      await sendEmail(email, subject, 'Formulario de contacto registrado', html);
    } catch (err) {
      return res.status(500).send({ msg: 'Internal Server error' });
    }
    res.status(200).send(newContact);
  }
}

module.exports = ContactsController;
