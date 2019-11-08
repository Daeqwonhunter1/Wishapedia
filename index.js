const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const { Character } = require('./models');


const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());


//Routes
app.get('/', (req, res) => {
  res.json({ message: 'It is working' })
})

app.get('/ping', (req, res) => {
  res.json({ ping: 'pong' })
})

app.listen(PORT, () => console.log(`up on port ${PORT}`))