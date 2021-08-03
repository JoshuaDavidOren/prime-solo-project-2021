const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
  const qText = `
  SELECT FROM "favorite_connections"
  WHERE "user_id" = $1;
  `;
  pool
    .query(qText, [req.user.id])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log("Error GETing Favorites", err);
      res.sendStatus(500);
    });
});

router.post("/farmer", (req, res) => {
  const qText = `
    INSERT INTO "favorite_connections" ("user_type_id", "farmer_type_id")
    VALUES ($1, $2) 
    ;`;
  pool
    .query(qText, [req.user.id, req.body.id])
    .then(() => {
      console.log('INSERT to "favorites" successful');
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('Error POST "favorites"', err);
      res.sendStatus(500);
    });
});

router.post("/market", (req, res) => {
  const qText = `
        INSERT INTO "favorite_connections" ("user_type_id", "farmer_market_id")
        VALUES ($1, $2) 
        ;`;
  pool
    .query(qText, [req.user.id, req.body.id])
    .then(() => {
      console.log('INSERT to "favorites" successful');
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('Error POST "favorites"', err);
      res.sendStatus(500);
    });
});

router.delete("/farmer/:id", (req, res) => {
  const farmerId = req.params.id;
  const qText = `
            DELETE FROM "favorite_connections" 
            WHERE "user_type_id" = $1 AND "favorite_connections".farmer_type_id = $2
            ;`;
  pool
    .query(qText, [req.user.id, farmerId])
    .then(() => {
      console.log('DELETE to "favorite_connections" successful');
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('Error DELETE "favorite_connections"', err);
      res.sendStatus(500);
    });
});

router.delete("/farmer/:id", (req, res) => {
  const marketId = req.params.id;
  const qText = `
            DELETE FROM "favorite_connections" 
            WHERE "user_type_id" = $1 AND "favorite_connections".farmers_markets_id = $2;
            `;
  pool
    .query(qText, [req.user.id, marketId])
    .then(() => {
      console.log('DELETE to "favorite_connections" successful');
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('Error DELETE "favorite_connections"', err);
      res.sendStatus(500);
    });
});

module.exports = router;
