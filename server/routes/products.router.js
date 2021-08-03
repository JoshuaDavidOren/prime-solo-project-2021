const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// shows user viewing farmer profile the farmers list of products
router.get('/:id', (req, res) => {
  const qText = `
    SELECT * FROM "farmer_products" 
    JOIN "products" on "farmer_products".product_id = "products".id 
    WHERE "user_id = $1
    ;`;

  pool.query(qText,[req.params.id])
  .then((response) => {
      res.send(response.rows);
  })
  .catch(err => {
    console.log('Error GETing farmers Items', err);
    res.sendStatus(500)
  })
});
// shows farmers their list of items
router.get('/itemlist', (req, res) => {
    const qText = `
    SELECT * FROM "farmer_products" 
    JOIN "products" on "farmer_products".product_id = "products".id 
    WHERE "user_id = $1
    ;`;
  
    pool.query(qText,[req.user.id])
    .then((response) => {
        res.send(response.rows);
    })
    .catch(err => {
      console.log('Error GETing farmers Items', err);
      res.sendStatus(500)
    })
  });
// shows farmers all products for easy selction to add to their list
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
// adds product to farmers personal list
  router.post('/addproduct', (req, res) => {
    const product = req.body.productId
    const price = req.body.price

    const qText = `
    INSERT INTO "farmer_products" ("user_id" , "product_id" , "asking_price", "available")
VALUES ( $1, $2, $3, true)  
    ;`;
    pool.query(qText,[req.user.id, product, price])
    .then(() => {
        console.log('INSERT to "farmer_products" successful');
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log('Error POST "farmer_products"', err);
        res.sendStatus(500);
      });
    });

// create new product for products table
router.post('/product', (req, res) => {
const qText = `
INSERT INTO "products" ("item")
VALUES ($1) 
;`;
pool.query(qText,[req.body])
.then(() => {
    console.log('INSERT to "products" successful');
    res.sendStatus(201);
  })
  .catch((err) => {
    console.log('Error POST "products"', err);
    res.sendStatus(500);
  });
});

//updates farmers item from avil-!avil
router.put('/item/:id', (req, res) => {
    const product = req.params.id
    const qText = `
    UPDATE "farmer_products" 
    SET "available" = NOT available
    WHERE "id" = $1 
    ;`;
    pool.query(qText,[product])
    .then(() => {
        console.log('UPDATE to "farmer_products" successful');
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log('Error UPDATE "farmer_products"', err);
        res.sendStatus(500);
      });
    });

    router.delete('/item/:id', (req, res) => {
        const product = req.params.id
        const qText = `
        DELETE FROM "farmer_products" 
        WHERE "id" = $1 
        ;`;
        pool.query(qText,[product])
        .then(() => {
            console.log('DELETE to "farmer_products" successful');
            res.sendStatus(201);
          })
          .catch((err) => {
            console.log('Error DELETE "farmer_products"', err);
            res.sendStatus(500);
          });
        });
module.exports = router;