const express = require('express');
const router = express.Router();
const courseControlller = require('../app/controller/CourseController');

router.get('/:slug', courseControlller.show);

module.exports = router;
