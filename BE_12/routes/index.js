var express = require('express');
var router = express.Router();
var registerinitialCheck = require('../middlewares/registerChecks');
var register = require('../controllers/register');
/* GET home page. */
router.get('/', function (req, res, next) {
  const sess = req.session;
  sess.username = 'Ritik';
  res.render('index', { title: 'Express' });
});

router.get('/test', (req, res, next) => {
  console.log('Redis value', req.session.username);
  res.render('index', { title: 'Express' });
});

router.post('/register', registerinitialCheck, register);

module.exports = router;
