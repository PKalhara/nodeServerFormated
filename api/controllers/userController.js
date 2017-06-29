'use strict';
var mysql = require('mysql');

var pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'test'
});

exports.validateUserLogin = function (req, res) {
	
	pool.getConnection(function (err, connection) {

		var sql = mysql.format("select * from users where email=? && passward=?", [req.body.email, req.body.password]);

		connection.query(sql, function (error, results, fields) {
			connection.release();
			if (error) {
				res.status(200).send(error);
			}

			if (results.length > 0) {
				res.status(200).send({
					status: true,
					user: results
				});
			} else {
				res.status(200).send({
					status: false
				});
			}
		});
	});
}

exports.createNewUser = function (req, res) {

	pool.getConnection(function (err, connection) {

		var values = {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			phone: req.body.phoneNumber,
			email: req.body.email,
			password: req.body.password
		};

		connection.query('INSERT INTO users SET ?', values, function (error, results, fields) {
			connection.release();
			if (error) {
				res.status(200).send(error);
			}

			res.status(200).send(results);
		});
	});
}