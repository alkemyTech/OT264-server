const contactPath = require('./contact.path');

module.exports = {
  '/backoffice/contacts': {
    ...contactPath.contact
  }
};
