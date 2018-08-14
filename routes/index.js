var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/message', function(req, res, next) {
  res.render('', {"message":{"text" : "빰빰맨의 방송은 아직입니다!"} });
});

module.exports = router;
