var express = require('express');
var router = express.Router();
var registerinitialCheck = require('../middlewares/registerChecks');
var { register, registerSuperAdmin } = require('../controllers/register');
const check = require('../middlewares/checkSuperAdmin');
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
router.post('/register-super-admin', registerinitialCheck, registerSuperAdmin);
router.get('/super', check);

module.exports = router;
