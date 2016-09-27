var express = require('express');
var router = express.Router();

// /truck 
router.get('/new', function (req, res, next) {
  res.render('newTruck');
})

router.post('/new', function (req, res, next) {
  console.log(req.body);
  res.render('owner')
})

router.get('/:id/profile', function(req,res,next) {
  res.render('truckProfile', {title: 'Food Trucks'});
})

module.exports = router;
