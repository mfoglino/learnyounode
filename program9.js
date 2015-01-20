var http = require('http');
var sleep = require('sleep');


url1=process.argv[2];
url2=process.argv[3];
url3=process.argv[4];

var urls = [url1, url2, url3];

//console.log(urls);


var count=0;

var dictionary=[];



for (var i = 0; i < 3; i++)
{
	httpGet(urls[i], i);
}


function httpGet(url, index)
{
	var allData = '';
	

	http.get(url, function (response)
		{	
			response.on("data", function (data){
				allData += data;				
			})

			response.on("end", function (){		

				dictionary[index]=allData;				
				count++;

				
				if (count == 3) 
					printArray(dictionary)						
				}
			);			
		});	
}
 
 
function printArray(array)
{
	array.forEach(
		function(elem){	
			console.log(elem);
	});
}


//=========================================================================

/*
    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)
    
          results[index] = data.toString()
          count++
    
          if (count == 3) // yay! we are the last one!
            printResults()
        }))
      })
    }
    
    for (var i = 0; i < 3; i++)
      httpGet(i)
*/