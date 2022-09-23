const testimonialPath = require('./testimonial.path');

module.exports = {
  '/testimonials': {
    ...testimonialPath.base
  },
  '/testimonials/{testimonialId}': {
    ...testimonialPath.byId
  }
};
