const check = (req, res, next) => {
  if (req.session.User.role === 'super-admin') {
    res.status(200).send('Success');
  } else {
    res.status(401).send('Unauthorized Access');
  }
};

module.exports = check;
