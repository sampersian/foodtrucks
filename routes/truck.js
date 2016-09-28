var express = require('express');
var router = express.Router();

var queries = require('../db/queries.js');

// /truck
router.get('/new', function (req, res, next) {
  res.render('newTruck');
})

router.post('/new', function (req, res, next) {
  console.log(req.body);
  res.render('owner')
})

router.get('/:id', function(req,res,next) {
  return queries.getScheduleTruck(req.params.id)
  .then((data) => {
    res.render('truck', {truck: data});
  })
})

module.exports = router;
