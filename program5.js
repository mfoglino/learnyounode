var fs = require('fs');


path = process.argv[2];
ext = process.argv[3];


function cbListFiles(err, list)
{	
	var filtered = list.filter(function(elem){
		var parts = elem.split('.');
		return parts[1]==ext;		
	})
	
	filtered.forEach(
		function(elem) {
			console.log(elem);
		});
}

fs.readdir(path, cbListFiles);