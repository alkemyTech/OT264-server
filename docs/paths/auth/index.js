const authPath = require('./auth.path');

module.exports = {
  '/auth/login': {
    ...authPath.login
  },
  '/auth/register': {
    ...authPath.register
  },
  '/auth/me': {
    ...authPath.me
  }
};
