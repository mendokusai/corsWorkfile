var express = require('express');
var POSTS = {
  '1': {'post': 'This is the first blog post.'},
  '2': {'post': 'This is the second blog post.'},
  '3': {'post': 'This is the third blog post.'},
  '4': {'post': 'This is the fourth post.'}
};
var handleCors = function(req, res, next) {
  res.set('Access-Control-Allow-Origin', 'http://localhost:1111');
  next();
};

var SERVER_PORT = 9999;
var serverapp = express();
serverapp.use(express.static(__dirname));
serverapp.use(handleCors);
serverapp.get('/api/posts', function(req, res) {
res.json(POSTS);
});
serverapp.listen(SERVER_PORT, function() {
console.log('Started server at http://127.0.0.1:' + SERVER_PORT);
});

var CLIENT_PORTa = 1111;
var clientappA = express();
clientappA.use(express.static(__dirname));
clientappA.listen(CLIENT_PORTa, function(){
console.log('Started client at http://localhost:' + CLIENT_PORTa);
});

var CLIENT_PORTb = 2222;
var clientappB = express();
clientappB.use(express.static(__dirname));
clientappB.listen(CLIENT_PORTb, function(){
console.log('Started client at http://localhost:' + CLIENT_PORTb);
});


