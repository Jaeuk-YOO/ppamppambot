var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send( {"type" : "buttons", "buttons" : ["선택 1", "선택 2", "선택 3"] });
});

module.exports = router;
