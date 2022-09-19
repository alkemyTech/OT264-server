const user = require('./user');
const category = require('./category');
const testimonial = require('./testimonial');
const news = require('./new');
module.exports = {
  paths: {
    ...testimonial,
    ...user,
    ...category,
    ...news
  }
};
