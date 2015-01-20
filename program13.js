	var http = require('http');
	var url = require('url');
	var dateFormat = require('dateformat');

	

	port=process.argv[2];

	var server = http.createServer(function (request, response) {

		request.setEncoding('utf8');
		
		var querystring = url.parse(request.url, true);
		

		if (request.method == 'GET') {


			var paramDate = querystring.query.iso;
			var unixtime = Date.parse(paramDate);

			var result = '';


			if(querystring.pathname =='/api/parsetime')
			{
				var date = new Date(unixtime);
				var jsonTime = {hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()}				
				result = JSON.stringify(jsonTime);
			}

			if(querystring.pathname =='/api/unixtime')
			{
				result={unixtime:unixtime};
				result = JSON.stringify(result);
			}
			
			console.log(result);
		}

		   
		   response.writeHead(200, {'Content-Type': 'application/json'});
		   
		   response.write(result);
		   response.end();  

	  
	  
	});
	
	server.listen(port)