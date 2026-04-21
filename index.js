const express = require('express');
const helmet = require('helmet');

// nosemgrep: javascript.express.security.audit.express-check-csurf-middleware-usage
const app = express();

app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'DevSecOps Lab', status: 'ok' });
});

app.listen(3000, () => console.log('Running on port 3000'));