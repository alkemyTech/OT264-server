var express = require('express');
var router = express.Router();
const ActivitiesController = require('../controllers/activitiesController');
const RoleValidator = require('../middlewares/roleValidator');

router.post('/', RoleValidator.isAdmin, ActivitiesController.create);

module.exports = router;
