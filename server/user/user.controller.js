var User = require('./user.js');

exports.index = function (req, res) {
  User.find(function (err, users) {
    if(!err) res.status(200).send(users);
    if(err) res.status(500).send(err);
  });
};

exports.create = function (req, res) {
  User.create(req.body, function(err, newUser){
    if(err) res.status(500).send(err);
    if(!err){ req.session.user = newUser; res.status(200).send(newUser); }
  });
};

exports.login = function(req, res){
  User.findOne({username: req.body.username, password: req.body.password}, function(err, user){
    if(err){ res.status(500).send(err); }
    if(!err){ req.session.user = user; res.status(200).send(user); }
  });
};

exports.logout = function(req, res){
  req.session.user = null;
  res.send(200);
};

exports.profile = function(req, res){
  if(req.session.user) res.status(200).send(req.session.user);
  if(!req.session.user) res.status(500).send('No user logged in');
};