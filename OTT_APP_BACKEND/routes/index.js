var express = require('express');
var router = express.Router();

const userControllers = require('../userController/controller')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/ott-details/advancedsearch', userControllers.advancedsearch);
router.get('/api/ott-details/getPlatforms', userControllers.getPlatforms);
router.post('/v1-local-api/specificImdbid', userControllers.specificImdbid);
module.exports = router;