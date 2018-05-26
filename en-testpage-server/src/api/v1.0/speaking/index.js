const express = require('express');
const router = express.Router();
const speaking = require('./speaking');

router.get('/get/question/', speaking.getQuestion);
router.post('/post/answer', speaking.postAnswer);
router.get('/get/speaking/:file', speaking.getListening);
router.get('/get/list', speaking.getList);
router.get('/get/image/:file', speaking.getPicture);

module.exports = router;