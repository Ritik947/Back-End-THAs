const router = require('express').Router();

const passport = require('../middlewares/passport');
const {
  userAuth,
  userLogin,
  checkRole,
  userRegister,
} = require('../utils/Auth');

//Registration routes
router.post('/register-user', async (req, res) => {
  await userRegister(req.body, 'user', res);
});

router.post(
  '/register-admin',
  async (req, res) => await userRegister(req.body, 'admin', res)
);

router.post('/register-super-admin', async (req, res) => {
  await userRegister(req.body, 'superadmin', res);
});

//Protected routes
router.get('/userprotected', userAuth, checkRole('user'), (req, res) => {
  res.status(200).send('Hello user');
});

router.get('/adminprotected', userAuth, checkRole('admin'), (req, res) => {
  res.status(200).send('Hello admin');
});

router.get(
  '/superadminprotected',
  userAuth,
  checkRole('superadmin'),
  (req, res) => {
    res.status(200).send('Hello superadmin');
  }
);

//Login routes
router.post(
  '/login-user',
  async (req, res) => await userLogin(req.body, 'user', res)
);
router.post(
  '/login-admin',
  async (req, res) => await userLogin(req.body, 'admin', res)
);
router.post(
  '/login-super-admin',
  async (req, res) => await userLogin(req.body, 'superadmin', res)
);
module.exports = passportRouter = router;
