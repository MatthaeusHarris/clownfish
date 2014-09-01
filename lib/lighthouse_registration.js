var Client = require('node-rest-client').Client;

var client = new Client();

var args = {
    data: {
        species: process.env.SERVICE_SPECIES,
        hostname: process.env.SERVICE_HOSTNAME,
        port: process.env.PORT || 3000,
        version: process.env.SERVICE_VERSION
    },
    headers: {
        "Content-Type": "application/json"
    }
}
setInterval(function() {
    client.post("http://localhost:8080/api/instances", args, function(data, response) {
        // console.log(data);
        // console.log(response);
    });
}, 5 * 1000);