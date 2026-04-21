const express = require('express');
const helmet = require('helmet');

const app = express(); // nosemgrep: javascript.express.security.audit.express-check-csurf-middleware-usage.express-check-csurf-middleware-usage

app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'DevSecOps Lab', status: 'ok' });
});

app.listen(3000, () => console.log('Running on port 3000'));
