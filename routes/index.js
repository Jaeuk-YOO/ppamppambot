var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/keyboard', function(req, res, next) {
  res.render('', {"type" : "buttons", "buttons" : ["선택 1", "선택 2", "선택 3"] });
});

router.post('/message', function(req, res, next) {
  res.render('', {"message":{"text" : "빰빰맨의 방송은 아직입니다!"} });
});

module.exports = router;
