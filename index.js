const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const wishlistRouter = require('./routes/wishlistRouter')
const userRouter = require('./routes/userRouter.js')
const itemRouter = require('./routes/itemRouter.js')

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());




//Routes

app.use('/wishlists', wishlistRouter);
app.use('/auth', userRouter);
app.use('/wishlists/:wishlistId/items', itemRouter);


///error handling///

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err.message);
});

app.listen(PORT, () => console.log(`up on port ${PORT}`))