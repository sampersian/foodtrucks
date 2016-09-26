var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signup', function (req, res, next) {
  res.render('signup')
});

router.post('/signup', function (req, res, next) {
  console.log(req.body);
  res.render('signup')
})

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/truck/:id/profile', function(req,res,next){
  res.render('truckProfile', {title: 'Express'});
})

module.exports = router;
