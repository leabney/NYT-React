const router = require("express").Router();
const articleController = require("../../controllers/nytController");

router
.route("/")
.get(articleController.findAll);

module.exports = router;