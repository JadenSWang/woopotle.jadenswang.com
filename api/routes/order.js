const express = require("express");
const nodemailer = require("nodemailer");
const fs = require("fs");

const router = express.Router();

getTime = function() {
	let date_ob = new Date();

	// current date
	// adjust 0 before single digit date
	let date = ("0" + date_ob.getDate()).slice(-2);

	// current month
	let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

	// current year
	let year = date_ob.getFullYear();

	// current hours
	let hours = date_ob.getHours();

	// current minutes
	let minutes = date_ob.getMinutes();

	// current seconds
	let seconds = date_ob.getSeconds();

	// prints date & time in YYYY-MM-DD HH:MM:SS format
	return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
};

router.get("/", function(req, res, next) {
	console.log(req.query.order + " time: " + getTime());
	fs.appendFile("./orders.txt", "\r\n" + req.query.order + " time: " + getTime(), function(err) {
		if (err) console.log("ERROR AHHAHA");
	});
});

module.exports = router;
