var express = require('express');
var router = express.Router();
const path = require('path');

const sendLogo = (res, name) => {
  switch (name) {
    case 'google':
      return 'google.svg';
      break;
    case 'facebook':
      return 'facebook.png';
      break;
    case 'instagram':
      return 'instagram.png';
      break;
    case 'twitter':
      return 'twitter.png';
      break;
    default:
      res.send('404 Not Found xD');
      break;
  }
};

router.get('/:name', function (req, res, next) {
  res.sendFile(
    path.join(__dirname, `../public/images/${sendLogo(res, req.params.name)}`)
  );
});

module.exports = router;
