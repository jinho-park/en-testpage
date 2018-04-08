const express = require('express');
const router = express.Router();
const reading = require('./reading');

router.get('/get/question', reading.getQuestion);
router.post('/post/answer', reading.postAnswer);

module.exports = router;