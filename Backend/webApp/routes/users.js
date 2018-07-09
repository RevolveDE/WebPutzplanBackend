var express = require('express');
var router = express.Router();

var connection = require('./connection.js');

router.get('/', function (req, res, next) {
	connection.query('SELECT * FROM users', function(err, rows) {
		res.send(rows);
	});
});

module.exports = router;
