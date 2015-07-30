var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
  text: String,
  user: String
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;