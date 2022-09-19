const user = require('./user');
const category = require('./category');
const testimonial = require('./testimonial');
const news = require('./new');
const member = require('./member');
module.exports = {
  paths: {
    ...testimonial,
    ...user,
    ...category,
    ...news,
    ...member
  }
};
