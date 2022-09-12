const userPath = require('./user.path');

module.exports = {
  '/user': {
    ...userPath.base
  },
  '/user/{userId}': {
    ...userPath.byId
  }
};
