const user = require('./user');
const category = require('./category');
module.exports = {
  paths: {
    ...user,
    ...category
  }
};
