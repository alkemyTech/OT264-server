const { Contacts } = require('../models');

class ContactsController {
  static async create(req, res) {
    const data = req.body;
    try {
      const newContact = await Contacts.create(data);
      res.status(200).send(newContact);
    } catch (err) {
      console.log(err);
      res.status(500).send({ msg: 'Internal Server error' });
    }
  }
  static async getAll(req, res) {
    try {
      const contact = await Contacts.findAll();
      res.status(200).json(contact);
    } catch (error) {
      res.status(500).send({ msg: 'Internal Server error' });
    }
  }
}

module.exports = ContactsController;
