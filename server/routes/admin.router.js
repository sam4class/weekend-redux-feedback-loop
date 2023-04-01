const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


//GET
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "feedback";`;

    pool.query(sqlText)
    .then((result) => {
        res.send(result.rows)
    }).catch((err) => {
        console.log('error in GET server', err);
        res.sendStatus(500);
    })
})

module.exports = router;