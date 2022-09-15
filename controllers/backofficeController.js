const { Contacts } = require('../models');
const responseStatusHTTP = require('../utils/responseHTTP');

class BackofficeController {
  static async getContacts(req, res) {
    try {
      const contacts = await Contacts.findAll({
        attributes: ['name', 'phone', 'email', 'message']
      });
      const parseContacts = JSON.parse(JSON.stringify(contacts));
      res.render('backofficeContacts', { title: 'Contacts', contacts: parseContacts });
    } catch (err) {
      res.status(responseStatusHTTP.Internal_Server_Error).json({ msg: 'Internal Server error' });
    }
  }
}

module.exports = BackofficeController;
