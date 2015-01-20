var http = require('http');
var sleep = require('sleep');
var bl = require('bl');

url1=process.argv[2];
url2=process.argv[3];
url3=process.argv[4];

var urls = [url1, url2, url3];




var dictionary = [];

/*
var i=0;
urls.forEach(
	function(url){	
			dictionary[i] = httpGet(url);
			i++;
	
});
*/

//console.log(dictionary);


console.log(httpGet(url1));


function httpGet(url)
{
	var allData = '';
	var count = 0;

	http.get(url, function (response)
		{			
			
	        response.pipe(bl(function (err, data) {
	          if (err)
	            return console.error(err);

	        	return data.toString();
	        }));			
		});	
}




/*

function httpGet(url)
{
	var allData = '';
	var count = 0;

	http.get(url, function (response)
		{			
			

			
			

			response.on("data", function (data){
				allData += data;
				count += data.length
			})

			response.on("end", function (){		


					
				}
			);			
		});	
}
*/