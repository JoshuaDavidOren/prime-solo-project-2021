const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
  const qText = `
    SELECT * FROM "farmer_products" 
    JOIN "products" on "farmer_products".product_id = "products".id 
    WHERE "user_id = $1;`;

  pool.query(qText,[req.params.id])
  .then((response) => {
      res.send(response.rows);
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
        res.send(response.rows);
    })
    .catch(err => {
      console.log('Error GETing farmers Items', err);
      res.sendStatus(500)
    })
  });

  router.get('/listproducts', (req, res) => {
    const qText = `
    SELECT * FROM "products" 
    ;`;
  
    pool.query(qText)
    .then((response) => {
        res.send(response.rows);
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