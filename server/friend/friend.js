var mongoose = require('mongoose');

var FriendSchema = mongoose.Schema({
  userId: String,
  friendId: String
});

var Friend = mongoose.model('Friend', FriendSchema);

module.exports = Friend;