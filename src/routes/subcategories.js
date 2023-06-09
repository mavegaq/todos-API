const express = require('express');
const router = express.Router();
const subcategoriesController = require('../controllers/subcategoriesController');

router.post('/', subcategoriesController.createSubcategory);

module.exports = router;
