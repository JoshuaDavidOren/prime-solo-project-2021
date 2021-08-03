const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/item/:id', (req, res) => {
  const qText = `
    SELECT * FROM "farmer_products" 
    JOIN "products" on "farmer_products".product_id = "products".id 
    WHERE "user_id = $1;`;

  pool.query(qText,[req.params.id])
  .then((response) => {
      res.send(result.rows);
  })
  .catch(err => {
    console.log('Error GETing farmers Items', err);
    res.sendStatus(500)
  })
});

router.get('/itemlist', (req, res) => {
    const qText = `
    SELECT * FROM "farmer_products" 
    JOIN "products" on "farmer_products".product_id = "products".id 
    WHERE "user_id = $1;`;
  
    pool.query(qText,[req.user.id])
    .then((response) => {
        res.send(result.rows);
    })
    .catch(err => {
      console.log('Error GETing farmers Items', err);
      res.sendStatus(500)
    })
  });

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;