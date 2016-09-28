"use strict"

var express = require('express');
var router = express.Router();
var queries = require('../db/queries.js')





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/today/locations', function (req, res, next) {
  queries.GetScheduleDay()
  .then((data) => {
    res.send(data);
  })
})
// 
// router.get('/results/truck/:term', function(req, res, next) {
//   console.log('results');
//   queries.getTrucksByName('term')
//   .then(function(trucks) {
//     res.redirect('results', {
//       trucks: trucks
//     })
//   })
// })

module.exports = router;
