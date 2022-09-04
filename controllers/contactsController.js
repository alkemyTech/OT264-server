const { Contacts } = require('../models');
const sendEmail = require('../utils/sendEmail');
class ContactsController {
  static async create(req, res) {
    const data = req.body;
    const { email } = req.body;
    let newContact;
    try {
      newContact = await Contacts.create(data);
      const subject = 'Formulario de contacto registrado exitosamente';
      const body = `Agradecemos su contacto con nosotros, nos comunicaremos lo más pronto posible`;
      await sendEmail(email, subject, body);
    } catch (err) {
      return res.status(500).send({ msg: 'Internal Server error' });
    }
    res.status(200).send(newContact);
  }
}

module.exports = ContactsController;
