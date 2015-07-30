var express = require('express'),
    controller = require('./post.controller.js');

var router = express.Router();

router.post('/', controller.create);

module.exports = router;