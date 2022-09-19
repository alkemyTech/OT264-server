const memberPath = require('./member.path');

module.exports = {
  '/members': {
    ...memberPath.base
  },
  '/members/{memberlId}': {
    ...memberPath.byId
  }
};
