// Create web server
// By: Ari Lerner

// Load modules
var http = require('http');

// Create web server
http.createServer(function (request, response) {
	// Return 200 OK
	response.writeHead(200, {'Content-Type': 'text/plain'});
	// Return body of request
	response.end(request.body);
}).listen(8080); // Listen for connections on this port

