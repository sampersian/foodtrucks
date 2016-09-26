var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/truck/:id/profile', function(req,res,next){
  res.render('truckProfile', {title: 'Express'});
})

module.exports = router;
