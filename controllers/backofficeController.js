const { Contacts } = require('../models');
const { NotFound } = require('../utils/error');

class BackofficeController {
  static async getContacts(req, res) {
    try {
      const contacts = await Contacts.findAll();
      const parseContacts = JSON.parse(JSON.stringify(contacts));
      res.render('backofficeContacts', { title: 'Contacts', contacts: parseContacts });
    } catch (err) {
      return NotFound;
    }
  }
}

module.exports = BackofficeController;
