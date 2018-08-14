var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/keyboard', function(req, res, next) {
  res.render('index', {"type" : "buttons", "buttons" : ["선택 1", "선택 2", "선택 3"] });
});



'https://:your_server_url/keyboard'
module.exports = router;
