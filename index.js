const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'DevSecOps Lab', status: 'ok' });
});

app.listen(3000, () => console.log('Running on port 3000'));