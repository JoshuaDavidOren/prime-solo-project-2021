const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
require('dotenv').config();

router.post('/', (req, res) => {
    console.log('what is this',req.body);
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;

    axios.get(`${process.env.census_search_api}&street=${address}&city=${city}&state=${state}&zipCode=${zip}`
    )
 
    .then((response) => {
        console.log('Exact coordinates',response.data.result.addressMatches[0].coordinates);
        const lat = response.data.result.addressMatches[0].coordinates.y;
        const lng = response.data.result.addressMatches[0].coordinates.x;
        pool.query(`
        INSERT INTO "smush" (location)
        VALUES ('{ "lat": ${lat}, "lng": ${lng} }');`)
        .then (result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('Error COORDINATES POSTING',error);
            res.sendStatus(501)
          })
    })
    .catch((err) => {
        console.log('this is an error',err);
        res.sendStatus(500)
    })
});

module.exports = router;