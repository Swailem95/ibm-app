var request = require('request');

//validate google client token
var validateClientToken = function(token, callback){

  var url  = 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' + token;

  request(url, function(error, response, body){

    //a token should only be valid if the JSON object does not have
    //an error field
    var isValid = JSON.parse(body).error_description === undefined;

    if(callback !== undefined){
          callback(isValid);
    }

});
};

module.export = validateClientToken;
