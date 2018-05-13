const express = require('express');
const router = express.Router();
const listening = require('./listening');

router.get('/get/problem/:num', listening.getQuestion);
router.post('/post/answer', listening.postAnswer);
router.get('/get/listening/:file', listening.getListening);
router.get('/get/list', listening.getList);

module.exports = router;