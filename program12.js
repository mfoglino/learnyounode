	var http = require('http');
	var fs = require('fs');

	port=process.argv[2]


	var server = http.createServer(function (request, response) {

		request.setEncoding('utf8');
		//console.log(request.headers);
		

		if (request.method == 'POST') {
			console.log('POST');

			var body = ''
			request.on('data', function (chunk) {
				body += chunk;
				console.log("Partial body: " + body);
			})

			request.on('end', function () {
			  	try {
			  		//var data = JSON.parse(body);
			  	} catch (er) {
			      // uh oh!  bad json!
			      response.statusCode = 400;
			      return response.end('error: ' + er.message);

			  }
			   
			   
			   
			   response.writeHead(200, {'Content-Type': 'text/html'});
			   response.write(body.toUpperCase());
			   response.end();
			});
		 } 	  
	});
	
	server.listen(port)