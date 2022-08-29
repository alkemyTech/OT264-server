const Authentication = require('../middlewares/authentication');
var express = require('express');
var router = express.Router();
const OrganizationController = require('../controllers/organizationController');

router.get('/public', Authentication, OrganizationController.getAll);

module.exports = router;
