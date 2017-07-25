
// requires express
var express = require('express');
//requires path
var path = require('path');
//shorthand express varibale
var app = express();
// uses static files
var port = process.env.PORT||3005;

app.use(express.static('public'));
// /* gets all follows the path to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});
// Tells the sever to listen for action on port 3004
app.listen(port, function() {
  console.log('up on port 3005!!!');
});
