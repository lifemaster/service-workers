const express = require('express');

const app = express();

let requestCounter = 0;

app.use((req, res, next) => {
  console.log('\x1b[33m', `${++requestCounter}: ${req.url}`, '\x1b[0m');
  console.log('Request headers: ', req.headers);
  console.log('-------------------------------');

  setTimeout(() => next(), 5000);
});

app.use(express.static('public'));

app.listen(8080, () => console.log('Server is listening on port 8080'));