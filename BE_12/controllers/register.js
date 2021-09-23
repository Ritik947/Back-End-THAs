const User = require('../models/mongo');
var bcrypt = require('bcryptjs');
const saltRounds = 10;
const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const alreadyExists = await User.findOne({
      where: { email: email.toLowerCase() },
    }).exec();
    if (alreadyExists) {
      res.status(401).send('Email already exixts');
    } else {
      console.log('Here');
      var salt = bcrypt.genSaltSync(saltRounds);
      var hash = bcrypt.hashSync(password, salt);
      const newUser = new User({
        email: email.toLowerCase(),
        password: hash,
        username: username,
      });
      const savedUser = await newUser.save();
      res.status(201).send(`User registered successfully!\n${savedUser}`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong');
  }
};

module.exports = register;
