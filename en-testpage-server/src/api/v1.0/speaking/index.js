const express = require('express');
const router = express.Router();
const speaking = require('./speaking');

router.get('/get/question', speaking.getQuestion);
router.post('/post/answer', speaking.postAnswer);

module.exports = router;