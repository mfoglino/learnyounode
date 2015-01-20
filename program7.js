var http = require('http');



url=process.argv[2];

var response = http.get(url, cb);


function cb(response)
{

	response.setEncoding("utf8");
	response.on("data", function (data){
		console.log(data);
	})

}

