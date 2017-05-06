var http = require('http');
http.createServer(function(request, response){
	response.writeHead(200);
	response.write("Hello, world");
	setTimeout(function(){
		response.end("I am here!");
	},5000);
}).listen(8080);