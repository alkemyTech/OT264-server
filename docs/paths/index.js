const user = require('./user');
const category = require('./category');
const testimonial = require('./testimonial');
module.exports = {
  paths: {
    ...testimonial,
    ...user,
    ...category
  }
};
