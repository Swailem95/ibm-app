var request = require('request');

//validate google client token
var validateClientToken = function(token, callback){

  var url  = 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' + token;

  //get your clientID for your app from the google devs console
  var clientID = 'your-client-id-here';

  request(url, function(error, response, body){

    var response = JSON.parse(body);

    //check that there is no error and that the clientID is the same
    var isValid = response.error_description === undefined && response.aud === clientID;

    if(callback !== undefined){
          callback(isValid);
    }

});
};

module.export = validateClientToken;
