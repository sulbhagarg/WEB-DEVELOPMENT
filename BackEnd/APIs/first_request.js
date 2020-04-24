var request = require("request");
request('https://api.oceandrivers.com:443/v1.0/getAemetStation/aeropuertopalma/lastdata/', function(error, response, body){
    if(!error && response.statusCode==200){
        var parsedData = JSON.parse(body);
        console.log(parsedData["TIME_STRING"]);
    }
});