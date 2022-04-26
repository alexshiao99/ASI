const express = require('express');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(expressStaticGzip(`${__dirname}/../client/dist`));

app.get('*.js', (req, res, next) => {
  if (req.header('Accept-Encoding').includes('br')) {
    req.url += '.br';
    res.set('Content-Encoding', 'br');
    res.set('Content-Type', 'application/javascript; charset=UTF-8');
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});