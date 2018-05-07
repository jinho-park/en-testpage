const express = require('express');
const router = express.Router();
const listening = require('./listening');

router.get('/get/audio', listening.getQuestion);
router.post('/post/answer', listening.postAnswer);
router.get('/get/listening/:num', listening.getListening);

module.exports = router;