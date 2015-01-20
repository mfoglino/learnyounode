var fs = require('fs');
//====================================================================
//console.log("HELLO WORLD");
//====================================================================



//====================================================================
var sum = 0;
for (var i = process.argv.length - 1; i >= 2; i--) {
	sum += Number(process.argv[i]);
};

//console.log(sum);
//====================================================================



//====================================================================
filename = process.argv[2];

//console.log(filename);

//var stream = fs.readFileSync(filename);
//var lines = stream.toString().split('\n');
//console.log(lines.length-1);
//====================================================================



//====================================================================
filename = process.argv[2];

//console.log(filename);

function cbCountLines(err, fileContent)
{
	//console.log("despues");
	var lines = fileContent.toString().split('\n');
	console.log(lines.length-1);
}

fs.readFile(filename, cbCountLines);


//console.log("antes");
//====================================================================