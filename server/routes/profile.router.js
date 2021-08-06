const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/farmer/:id', (req, res) => {
  console.log("in profile router");
  const qText = `
    select "user_id", "first_name", "last_name", "phone_number", "email" from "user_profile"
    where "user_id" = $1;
    `;

    pool.query(qText, [req.params.id])
    .then((response) => {
      console.log('what is this',response.rows);
      res.send(response.rows);
  })
  .catch(err => {
    console.log('Error GETing user profile', err);
    res.sendStatus(500)
  })
})

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;