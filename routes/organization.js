var express = require('express');
var router = express.Router();
const OrganizationController = require('../controllers/organizationController');

router.get('/public', OrganizationController.getAll);

module.exports = router;
