const express = require('express');

const app = express();

let requestCounter = 0;

app.use((req, res, next) => {
  console.log(`${++requestCounter}: ${req.url}`);
  console.log('Request headers: ', req.headers);
  console.log('-------------------------------');
  next();
});

app.use(express.static('public'));

app.listen(8080, () => console.log('Server is listening on port 8080'));