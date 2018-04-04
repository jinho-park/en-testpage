const express = require('express');
const router = express.Router();
const question = require('./question');

router.get('/file/listen', question.getListen);

module.exports = router;