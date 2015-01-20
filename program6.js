var listFiles = require('./program6_module.js');


path = process.argv[2];
ext = process.argv[3];


listFiles(path, ext, function(err, files, num){
	files.forEach(function(elem){console.log(elem);});

	console.log(num);
})


