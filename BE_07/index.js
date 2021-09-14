const app = require('express')();
app.get('/', (_req, res) => {
  res.status(200).send('Responses to GET requests are cached');
});

app.post('/', (req, res) => {
  res.send(`POST method results are not cached ${req.query.code}`);
});

/*
QUERY PARAMS
? to denote start of query
key-value pairs separated by &
encodeUriComponent for converting query string to proper format
*/
app.get('/path', (req, res) => {
  res.status(200).send(req.query);
});

/*
letter before ? is optional in path
 */
app.get('/ab?cd', (req, res) => res.status(201).send('abcd or acd'));

/*
starts with ab and ends with cd
*/
app.get('/ab*cd', (req, res) =>
  res.status(201).send('What even comes between ab and cd? Could be anything')
);

/*
grouping characters as whole. Here, 'ad' or '' will be accepted but neither 'a' nor 'd' will be accepted
 */

app.get('/x(ad)?e', (req, res) => res.status(200).send('You got it right!'));

/*
$ marks the end of query
*/

app.get('/fly', (req, res) =>
  res.status(200).send('There are many kinds of flies')
);
app.get(/.fly*$/, (req, res) => res.status(200).send("Yes, that's a fly"));

app.listen(5000);
