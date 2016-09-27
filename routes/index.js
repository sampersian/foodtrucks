var express = require('express');
var router = express.Router();
var queries = require('../db/queries.js')

function today() {
  var d = new Date();
  var n = d.getDay();
  let days = {
    0: "sunday",
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday"
  }
  return days[n];
}



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/today/locations', function (req, res, next) {
  queries.GetScheduleDay(today())
  .then((data) => {
    res.send(data);
  })
})

module.exports = router;
