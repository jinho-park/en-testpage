const express = require('express');
const router = express.Router();
const writing = require('./writing');

router.get('/get/question', writing.getQuestion);
router.get('/get/problem', writing.getProblem);
router.post('/post/answer', writing.postAnswer);
router.get('/get/list', writing.getList);
router.get('/get/audio/:file', writing.getListen);

module.exports = router;