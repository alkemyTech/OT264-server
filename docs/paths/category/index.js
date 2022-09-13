const categoryPath = require('./category.path');

module.exports = {
  '/categories': {
    ...categoryPath.base
  },
  '/categories/{categoryId}': {
    ...categoryPath.byId
  }
};
