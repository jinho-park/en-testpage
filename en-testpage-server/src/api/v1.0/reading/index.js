const express = require('express');
const router = express.Router();
const reading = require('./reading');

router.get('/get/main/:num', reading.getMain);
router.get('/get/total', reading.getTotal);
router.get('/get/question/:num', reading.getQuestion);
router.post('/post/answer', reading.postAnswer);

module.exports = router;