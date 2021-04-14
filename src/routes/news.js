const express = require('express');
const router = express.Router();
const newsControlller = require('../app/controller/NewsController');

router.get('/:slug', newsControlller.show);
router.get('/', newsControlller.index);

module.exports = router;
