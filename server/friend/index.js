var express = require('express'),
    controller = require('./friend.controller.js');

var router = express.Router();

router.post('/addFriend', controller.addFriend);

module.exports = router;