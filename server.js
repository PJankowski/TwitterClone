var path = require('path'),
    express = require('express'),
    app = express(),
    pasth = require('path'),
    ejs = require('ejs'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cookieParser = require('cookie-parser');

mongoose.connect('mongodb://localhost/TwitterClone', function (err) {
  if (!err) console.log('Connected To DB');
  if (err) console.log(err);
});

app.set('PORT', process.env.NODE || 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(session({
  secret: '1234567890abcdefghijklmnopqrstuvwxyz'
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));

app.use('/api/user', require('./server/user'));
app.use('/api/friend', require('./server/friend'));
app.use('/api/post', require('./server/post'));

app.listen(app.get('PORT'), function(){
  console.log('Listening on port ' + app.get('PORT'));
});