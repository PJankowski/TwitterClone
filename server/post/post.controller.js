var Post = require('./post.js');

exports.create = function (req, res) {
  Post.create(req.body, function(err, post){
    if(err) res.status(500).send(err);
    if(!err){ res.status(200).send(post); }
  });
};