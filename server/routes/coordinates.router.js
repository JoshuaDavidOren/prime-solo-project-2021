const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
require('dotenv').config();

router.post('/updatelocation', (req, res) => {
    console.log('what is this',req.body);
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    const description = req.body.description;

    axios.get(`${process.env.census_search_api}&street=${address}&city=${city}&state=${state}&zipCode=${zip}`)
    .then((response) => {
        console.log('Exact coordinates',response.data.result.addressMatches[0].coordinates);
        const lat = response.data.result.addressMatches[0].coordinates.y;
        const lng = response.data.result.addressMatches[0].coordinates.x;
        const qText = `
        UPDATE  "vendors" 
        SET "location" = '{"lat":${lat},  "lng": ${lng} }', "description" = $1
        WHERE "user_id" = $2;`;
        pool.query(qText,[description, req.user.id])
        .then (result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('Error COORDINATES updating',error);
            res.sendStatus(501)
          })
    })
    .catch((err) => {
        console.log('this is an with Census.gov',err);
        res.sendStatus(500)
    })
});

router.get('/locations', (req, res) => {

    pool.query('SELECT * FROM "vendors";')
    .then((results) => {
        res.send(results.rows);
    })
    .catch((err) => {
        console.log('Error GETing coordinates', err);
        res.sendStatus(500)
    })
});

module.exports = router;