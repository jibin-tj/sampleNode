var express = require('express');
var port=process.env.PORT ||3000;
var app = express();

app.get('/index', function (req, res) {
  res.send('Hello World new!');
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});