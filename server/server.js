const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const coordinatesRouter = require('./routes/coordinates.router')
const productsRouter = require('./routes/products.router')
const favoriteRouter = require('./routes/favorite.router')
const profileRouter = require('./routes/profile.router')
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/profile/', profileRouter)
app.use('/api/user', userRouter);
app.use('/api/items', productsRouter)
app.use('/api/locations', coordinatesRouter)
app.use('/api/favorite', favoriteRouter)
// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
