const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companysController');

router.post('/', companyController.create);
router.get('/', companyController.getAll);
router.delete('/:id', companyController.delete);

module.exports = router;