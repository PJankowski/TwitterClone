var Friend = require('./friend.js');

exports.addFriend = function (req, res) {
  Friend.create({userId: req.session.user._id, friendId: req.body.id}, function(err, doc){
    if(err) res.status(500).send(err);
    if(!err) res.status(200).send('Ok');
  });
};