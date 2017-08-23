# Express/Ionic HTTPS Connection

To establish a secure (SSL or TLS) connection between an Ionic application and your express/node backend, you need an SSL certificate and a private key. 

- The certificate needs to be signed by a recognized authority for your browser to acknowledge its authenticity (Green lock in chrome). 

Below is a sample `app.js` file which shows how to set up a basic HTTPS server: 

```
var express = require('express');
var cors = require('cors')
var fs = require('fs');
var https = require('https');

var ssl_options = {
    key: fs.readFileSync('your-key-file', 'utf-8'),
    cert: fs.readFileSync('your-certificate-file', 'utf-8')
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

```

To send a secure request to the server from your Ionic/Angular 2 application, simply execute a regular HTTP request to the server but make sure the URL says `HTTPS`.

```
       this.http.get('https://localhost:3000/', {}).subscribe(res => {
          console.log(res.json());
        })
```

Additionally, you may want to route non-HTTPS traffic to an HTTPS port because in this current state, all non-HTTPS traffic is dropped.