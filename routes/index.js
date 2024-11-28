const express = require("express");
const router = express.Router();

//Take 2 parameter, request and result
router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
