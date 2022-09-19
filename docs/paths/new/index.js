const newPath = require('./new.path');

module.exports = {
  '/news': {
    ...newPath.base
  },
  '/news/{newId}': {
    ...newPath.byId
  },
  '/news/{id}/comments': {
    ...newPath.idComments
  }
};
