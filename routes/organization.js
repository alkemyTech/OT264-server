var express = require('express');
var router = express.Router();
const OrganizationController = require('../controllers/organizationController');

/* GET users listing. */
router.get('/public', OrganizationController.getAll);

module.exports = router;
