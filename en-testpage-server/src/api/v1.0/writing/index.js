const express = require('express');
const router = express.Router();
const writing = require('./writing');

router.get('/get/audio', writing.getQuestion);
router.post('/post/answer', writing.postAnswer);
router.get('get/list', writing.getList);
router.get('get/audio/:file', writing.getListen);

module.exports = router;