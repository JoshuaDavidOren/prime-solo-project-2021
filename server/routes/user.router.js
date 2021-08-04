const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted

// second step for creating user profile pay attention when creating forms and sagas
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const user_type = req.body.userType

  const qText = `INSERT INTO "user" (username, password, user_type)
    VALUES ($1, $2, $3) RETURNING id`;
  pool.query(qText, [username, password, user_type])
    // .then(() => res.sendStatus(201))
    .then(response => {
      const newUserId = response.rows[0].id;
      const firstName = req.body.firstName;
      const lastName = req.body.lastName;
      const phoneNumber = req.body.phoneNumber;
      const email = req.body.email;
      const farmName = req.body.farmName;
      
      const qText = `
      INSERT INTO "user_profile" ("user_id", "first_name", "last_name", "phone_number", "email", "page_title")
      VALUES ( $1, $2, $3, $4, $5, $6)
      `;
      pool.query(qText, [newUserId, firstName, lastName, phoneNumber, email, farmName])
    })
    .then(() => {
      console.log('INSERT to "user_profile" successful');
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('Error POST "user_profile"', err);
      res.sendStatus(500);
    })
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

router.get('/profile', (req, res) => {
  console.log("in profile router");
  const qText = (req.user.user_type === true ? 
    `SELECT * FROM "user_profile" 
    where "user_id" = $1;`
    :
    `select "user_id", "first_name", "last_name", "phone_number", "email" from "user_profile"
    where "user_id" = $1;`);

    pool.query(qText, [req.user.id])
    .then((response) => {
      console.log('what is this',response.rows);
      res.send(response.rows);
  })
  .catch(err => {
    console.log('Error GETing user profile', err);
    res.sendStatus(500)
  })
})

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
