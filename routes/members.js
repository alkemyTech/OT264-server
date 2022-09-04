const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const Validator = require('../middlewares/validator');
const MembersController = require('../controllers/membersController');

router.post(
  '/',
  body('name', 'name required').notEmpty(),
  body('facebookUrl', 'facebookUrl').notEmpty(),
  body('instagramUrl', 'instagramUrl required').notEmpty(),
  body('linkedinUrl', 'linkedinUrl required').notEmpty(),
  body('image', 'image required').notEmpty(),
  body('description', 'description required').notEmpty(),
  Validator.validateField,
  MembersController.create
);

router.delete('/:id', MembersController.deleteMember);

module.exports = router;
