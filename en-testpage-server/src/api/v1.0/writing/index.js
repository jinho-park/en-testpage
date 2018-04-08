const express = require('express');
const router = express.Router();
const writing = require('./writing');

router.get('/get/audio', writing.getQuestion);
router.post('/post/answer', writing.postAnswer);

module.exports = router;