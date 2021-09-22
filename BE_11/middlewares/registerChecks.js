const { emailValidate, passwordValidate } = require('../utils/validate');
const registerinitialCheck = (req, res, next) => {
  const { email, password, confirmPassword } = req.body;
  if (
    typeof email === 'string' &&
    typeof password === 'string' &&
    typeof confirmPassword === 'string' &&
    email.length > 0 &&
    password.length >= 8 &&
    password.length <= 18 &&
    confirmPassword === password &&
    emailValidate(email) &&
    passwordValidate(password)
  ) {
    next();
  } else {
    res.status(401).send('Initial checks failed');
  }
};

module.exports = registerinitialCheck;
