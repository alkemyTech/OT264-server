const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const Validator = require('../middlewares/validator');
const MembersController = require('../controllers/membersController');
const RoleValidator = require('../middlewares/roleValidator');

router.post(
  '/',
  RoleValidator.isAdmin,
  body('name', 'name required').notEmpty(),
  body('facebookUrl', 'facebookUrl').notEmpty(),
  body('instagramUrl', 'instagramUrl required').notEmpty(),
  body('linkedinUrl', 'linkedinUrl required').notEmpty(),
  body('image', 'image required').notEmpty(),
  body('description', 'description required').notEmpty(),
  Validator.validateField,
  MembersController.create
);

router.delete('/:id', RoleValidator.isAdmin, MembersController.deleteMember);
router.get('/', RoleValidator.isAdmin, MembersController.getAll);
router.put(
  '/:id',
  body('name', 'name required').notEmpty(),
  body('facebookUrl', 'facebookUrl required').notEmpty(),
  body('instagramUrl', 'instagramUrl required').notEmpty(),
  body('linkedinUrl', 'linkedinUrl required').notEmpty(),
  body('image', 'image required').notEmpty(),
  body('description', 'description required').notEmpty(),
  Validator.validateField,
  MembersController.updateMember
);
module.exports = router;
