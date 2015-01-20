var fs = require('fs');


module.exports = function listFiles(path, ext, cbFunction)
{
	fs.readdir(path, function (err, list)
	{	
		if(err)	{return cbFunction(err);}

		var filtered = list.filter(function(elem){
			var parts = elem.split('.');
			return parts[1]==ext;		
		})

		cbFunction(null, filtered, 666);
	}
	);	
}



