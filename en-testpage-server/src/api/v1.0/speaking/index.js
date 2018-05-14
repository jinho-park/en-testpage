const express = require('express');
const router = express.Router();
const speaking = require('./speaking');

router.get('/get/question/:num', speaking.getQuestion);
router.post('/post/answer', speaking.postAnswer);

module.exports = router;