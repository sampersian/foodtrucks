var express = require('express');
var router = express.Router();

// /owner
router.get('/', function (req, res, next) {
  //If the user is logged in
  // res.render('owner');
  //IF not
  res.render('login');
})


module.exports = router;
