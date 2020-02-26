const express = require("express");
const fs = require("fs");
require("../public/posts/duck.json");

const router = express.Router();

router.get("/", function(req, res, next) {
	const title = req.query.title;
	const path = "../api/public/posts/" + title + ".json";

	fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
		if (!err) {
			res.send(data);
		} else {
			res.send(createError(404));
		}
	});
});

module.exports = router;
