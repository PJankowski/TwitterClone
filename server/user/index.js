var express = require('express'),
    controller = require('./user.controller.js');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.create);
router.post('/login', controller.login);
router.get('/profile', controller.profile);
router.get('/logout', controller.logout);

module.exports = router;