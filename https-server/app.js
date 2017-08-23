var express = require('express');
var cors = require('cors')
var fs = require('fs');
var https = require('https');

var ssl_options = {
    key: fs.readFileSync('./keys/key.pem', 'utf-8'),
    cert: fs.readFileSync('./keys/certificate.pem', 'utf-8')
};

var app = express();
app.use(cors());

app.get('/', function (req, res) {
    //req.secure is a boolean value that is true 
    //when the request is sent over HTTPS
    res.json({text: "hello world!", secure: req.secure});
});

https.createServer(ssl_options, app).listen(3000, function () {
    console.log('Listening on port 3000 (HTTPS)');
});