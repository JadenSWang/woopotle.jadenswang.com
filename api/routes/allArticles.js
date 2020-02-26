const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/", function(req, res, next) {
	const path = "../api/public/posts/";
	const toReturn = [];

	fs.readdir(path, (err, files) => {
		files.forEach(file => {
			fs.readFile("public//posts//" + file, { encoding: "utf-8" }, (err, data) => {
				toReturn.push(JSON.parse(data));
			});
		});
	});
});

module.exports = router;
