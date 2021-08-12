const { default: axios } = require("axios");
const express = require("express");
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');
const router = express.Router();
const pool = require("../modules/pool");
require("dotenv").config();
// takes custom address input from farmers and turns it into coordinates to place a marker on the map for users to see
router.post("/updatelocation",rejectUnauthenticated, (req, res) => {
  console.log("what INFO is this", req.body);
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;
  const description = req.body.description;
  const availability = req.body.availability;
  const userAddress = `${address}, ${city}, ${state}, ${zip}`;

  axios
    .get(
      `${process.env.census_search_api}&street=${address}&city=${city}&state=${state}&zipCode=${zip}`
    )
    .then((response) => {
      console.log(
        "Exact coordinates",
        response.data.result.addressMatches[0].coordinates
      );
      const lat = response.data.result.addressMatches[0].coordinates.y;
      const lng = response.data.result.addressMatches[0].coordinates.x;
      const qText = `
        UPDATE  "vendors" 
        SET "location" = '{"lat":${lat},  "lng": ${lng} }', "description" = $1 , "address" = $2 , "availability" = $3
        WHERE "user_id" = $4;`;
      pool
        .query(qText, [description, userAddress, availability, req.user.id])
        .then((result) => {
          res.sendStatus(201);
        })
        .catch((error) => {
          console.log("Error COORDINATES updating", error);
          res.sendStatus(501);
        });
    })
    .catch((err) => {
      console.log("this is an with Census.gov", err);
      res.sendStatus(500);
    });
});
// gets all locations of farmers and markets to populate Map with markers
router.get("/market",rejectUnauthenticated, (req, res) => {
  pool
    .query(
      `
    SELECT * FROM "farmers_markets"
    JOIN "vendor" ON "farmers_markets".id = "vendor".farmers_markets_id;
    `
    )
    .then((results) => {
      res.send(results.rows);
    })
    .catch((err) => {
      console.log("Error GETing coordinates", err);
      res.sendStatus(500);
    });
});

router.get("/farmer",rejectUnauthenticated, (req, res) => {
  pool
    .query(
      `
    SELECT * FROM "vendors"
    JOIN "user_profile" ON "vendors".user_id = "user_profile".user_id
    WHERE "farmers_markets_id" = 0 ;
    `
    )
    .then((results) => {
      res.send(results.rows);
    })
    .catch((err) => {
      console.log("Error GETing coordinates", err);
      res.sendStatus(500);
    });
});

module.exports = router;
