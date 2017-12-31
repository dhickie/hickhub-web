var express = require('express');
var path = require('path')

var app = express();

app.get('/privacy', function (req, res) {
  res.sendFile(path.join(__dirname+'/views/privacy_policy.html'))
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});