const express = require('express');
const router = express.Router();
const writing = require('./writing');
const listening = require('./listening');
const reading = require('./reading');
const speaking = require('./speaking');

router.use('/writing', writing);
router.use('/listening', listening);
router.use('/reading', reading);
router.use('/speaking', speaking);
//model : 서버동작
//control : url에 따른 분할
module.exports = router;