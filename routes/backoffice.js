const express = require('express');
const router = express.Router();
const IsRole = require('../middlewares/roleValidator');

const BackofficeController = require('../controllers/backofficeController');

//router.get('/contacts', IsRole.isAdmin, BackofficeController.getAll);
router.get('/contacts', BackofficeController.getAll);
/*router.get('/contact', (req, res) => {
  res.sendFile(this.patch.resolver(__dirname, '../views/backofficeContacts.html'));
});*/

module.exports = router;
