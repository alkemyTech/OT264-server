const userPath = require('./user.path');

module.exports = {
  '/users': {
    ...userPath.base
  },
  '/users/{userId}': {
    ...userPath.byId
  }
};
