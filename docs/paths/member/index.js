const memberPath = require('./member.path');

module.exports = {
  '/members': {
    ...memberPath.base
  },
  '/members/{memberId}': {
    ...memberPath.byId
  }
};
