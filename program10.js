var net = require('net');
var util = require('util');
var dateFormat = require('dateformat');


var server = net.createServer(function (socket) {
      // socket handling logic

      socket.write(getTime());
      socket.end();

    })
    server.listen(process.argv[2])


//console.log(getTime())


function getTime()
{
	var date = new Date();

	//"2013-07-06 17:42"
	//return util.format("%s-%s-%s %s:%s", date.getFullYear(), date.getMonth()+1, date.getDate(),date.getHours(),date.getMinutes() );
	return dateFormat(date, "yyyy-mm-dd HH:MM");
}