var express = require('express');
var router = express.Router();


// signup
router.get('/', function (req, res, next) {
  res.render('signup')
});

router.post('/', function (req, res, next) {
  console.log(req.body);
  res.render('signup')
})



module.exports = router;
