const express = require('express');
const router = express.Router();
const question = require('./question');

router.use('/question', question);
//model : 서버동작
//control : url에 따른 분할
module.exports = router;