var express = require('express');
var POSTS = {
  '1': {'post': 'This is the first blog post.'},
  '2': {'post': 'This is the second blog post.'},
  '3': {'post': 'This is the third blog post.'},
  '4': {'post': 'This is the fourth post.'}
};
var SERVER_PORT = 9999;
var serverapp = express();
serverapp.use(express.static(__dirname));
serverapp.get('/api/posts', function(req, res) {
res.json(POSTS);
});
serverapp.listen(SERVER_PORT, function() {
console.log('Started server at http://127.0.0.1:' + SERVER_PORT);
});

var CLIENT_PORT = 1111;
var clientapp = express();
clientapp.use(express.static(__dirname));
clientapp.listen(CLIENT_PORT, function(){
console.log('Started client at http://localhost:' + CLIENT_PORT);
});

// For API goto: http://127.0.0.1:9999/api/posts
//
// For Client goto: http://127.0.0.1:1111/cors2b.html
//
// This should get a big fat ERROR because the client
// is not configured for CORS-requests.
// Congrats! You've got two servers!

