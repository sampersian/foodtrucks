var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Food Trucks' });
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

router.post('/login', function (req, res, next) {
  console.log(req.body);
  res.render('login')
})

router.get('/owner', function (req, res, next) {
  //If the user is logged in
  // res.render('owner');
  //IF not
  res.render('login');
})

router.get('/truck/new', function (req, res, next) {
  res.render('newTruck');
})

router.post('/truck/new', function (req, res, next) {
  console.log(req.body);
  res.render('owner', {
    ownerInfo: {};
  })
})

router.get('/truck/:id/profile', function(req,res,next) {
  res.render('truckProfile', {title: 'Food Trucks'});
})

router.get('/logout', function (req, res, next) {
  //Log out user
  res.render('index')
})



module.exports = router;
