var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '123',
	database : 'putzplan'
});

connection.connect(function (err) {
	if (err) {
		console.error('error connection: ' + err.stack);
		return;
	}
	console.log('connected to Database');
});

module.exports = connection;