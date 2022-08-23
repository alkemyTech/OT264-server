const { validationResult } = require('express-validator');
//Validate all fields in request with express-validator
const validateField = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send(errors.array().map((e) => e.msg));
  }
  next();
};

module.exports = { validateField };
