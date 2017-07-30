var request = require('request');

//change this to your app access token
var appAccessToken = '1484283014936731|uuQr6tL3RAnVXJwfhO5E6dll_zg';

var validateClientToken = function(token, callback){

    var clientAccessURL = 'https://graph.facebook.com/debug_token?input_token=' + token +
    '&access_token=' + appAccessToken;

    request( clientAccessURL, function(error, response, body){
        var isValid = JSON.parse(body).data.is_valid;
        callback(isValid);
    });

}

//change to the token you want to test
var token = 'EAAVF8pHZAZBJsBAFvY2cLdXQ9hZB58mVyZCN0ZBLat9ACpZCRts1ZCX6BlnmmEFZB0uECZAtLXUZB8ygrGcRXrH3xuWZC5zdiuAWVk1AAY3pGi0JHOeS7MK9VZAd5ZCcTqUW9XSkKHvFe0VhTsBMGp2Bso1HyLFh6ZChmScElC9SSTTUzC4TphMtDqfNzOPOgZCaM8tKkr34mQ8CoN1mfnLF3BUhCL5';

validateClientToken(token, function(isValid){
    //should print true if the token is valid
    console.log(isValid);
});
