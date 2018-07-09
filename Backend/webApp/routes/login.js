var express = require('express');
var router = express.Router();

var connection = require('./connection.js');

var data = {
	"username" : "",
	"md5hash" : ""
};

var databaseData;

connection.query('SELECT username, md5hash FROM users', function(err, rows) {
	databaseData = rows;
});

router.get('/', function (req, res, next) {
	res.json({ returncode: 'success'});
});

module.exports = router;