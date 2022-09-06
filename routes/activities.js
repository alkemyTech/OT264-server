var express = require('express');
var router = express.Router();
const { body } = require('express-validator');
const Validator = require('../middlewares/validator');
const ActivitiesController = require('../controllers/activitiesController');
const RoleValidator = require('../middlewares/roleValidator');

router.post('/', RoleValidator.isAdmin, ActivitiesController.create);
router.put(
  '/:id',
  RoleValidator.isAdmin,
  body('name', 'name required').notEmpty(),
  body('content', 'content required').notEmpty(),
  body('image', 'image required').notEmpty(),
  Validator.validateField,
  ActivitiesController.updateActivities
);

module.exports = router;
