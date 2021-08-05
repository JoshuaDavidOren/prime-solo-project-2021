const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// shows user viewing farmer profile the farmers list of products
router.get('/item/:id', (req, res) => {
  const qText = `
    SELECT * FROM "farmer_products" 
    JOIN "products" on "farmer_products".product_id = "products".id 
    WHERE "user_id" = $1
    ;`;

  pool.query(qText,[req.params.id])
  .then((response) => {
      res.send(response.rows);
  })
  .catch(err => {
    console.log('Error GETing view users', err);
    res.sendStatus(500)
  })
});
// shows farmers their list of items
router.get('/itemlist', (req, res) => {

  const qText = `
    SELECT * FROM "farmer_products" 
    JOIN "products" on "farmer_products".product_id = "products".id 
    WHERE "user_id" = $1
    ;`;
    console.log('user data', req.user.id);
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
    SELECT * FROM "products"; 
    `;
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
    console.log('this should be an object',req.body);
    const product = req.body.productId
    const price = req.body.price
    const quantity = req.body.quantity
    const qText = `
    INSERT INTO "farmer_products" ("user_id" , "product_id" , "asking_price", "quantity", "available")
VALUES ( $1, $2, $3, $4, true)  
    ;`;
    pool.query(qText,[req.user.id, 3, price, quantity])
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
    WHERE "product_id" = $1 AND "user_id" = $2  
    ;`;
    pool.query(qText,[product, req.user.id])
    .then(() => {
        console.log('UPDATE to "farmer_products" successful');
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log('Error UPDATE "farmer_products"', err);
        res.sendStatus(500);
      });
    });
    // deletes item from farmers list
    router.delete('/delete/:id', (req, res) => {
        const product = req.params.id
        const qText = `
        DELETE FROM "farmer_products" 
        WHERE "product_id" = $1 AND "user_id" = $2 
        ;`;
        pool.query(qText,[product, req.user.id])
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