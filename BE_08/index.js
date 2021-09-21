const app = require('express')();

app.use((req, res, next) => {
  switch (req.query.level) {
    case 'user':
      console.log('Access allowed for all users');
      break;
    case 'admin':
      console.log('Access allowed for administrators only');
      break;
    default:
      res.send('Invalid access level');
      break;
  }
  next();
});

app.get('/', (req, res) => {
  res.send(`Welcome ${req.query.level}`);
});

app.listen(3000);
