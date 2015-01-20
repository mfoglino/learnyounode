var http = require('http');



url=process.argv[2];

var response = http.get(url, cb);


function cb(response)
{

	response.setEncoding("utf8");

	var allData = '';
	var count = 0;

	response.on("data", function (data){
		allData += data;
		count += data.length
	})

	response.on("end", function (){		
		console.log(count);
		console.log(allData);
	})
}

