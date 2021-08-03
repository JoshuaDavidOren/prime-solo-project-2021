const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

router.post('/product', (req, res) => {
    const qText = `
    INSERT INTO "favorites" ("user_type_id", "farmer_type_id")
    VALUES ($1, $2) 
    ;`;
    pool.query(qText,[req.user.id, req.bod.idy])
    .then(() => {
        console.log('INSERT to "favorites" successful');
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log('Error POST "favorites"', err);
        res.sendStatus(500);
      });
    });

    router.post('/product', (req, res) => {
        const qText = `
        INSERT INTO "favorites" ("user_type_id", "farmer_market_id")
        VALUES ($1, $2) 
        ;`;
        pool.query(qText,[req.user.id, req.bod.id])
        .then(() => {
            console.log('INSERT to "favorites" successful');
            res.sendStatus(201);
          })
          .catch((err) => {
            console.log('Error POST "favorites"', err);
            res.sendStatus(500);
          });
        });

module.exports = router;