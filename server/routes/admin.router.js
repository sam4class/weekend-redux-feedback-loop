const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


//GET
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id" DESC;`;

    pool.query(sqlText)
    .then((result) => {
        res.send(result.rows)
    }).catch((err) => {
        console.log('error in GET server', err);
        res.sendStatus(500);
    })
})


//DELETE
router.delete('/delete/:id', (req, res) => {

    let reqId = req.params.id;
    const sqlText = 'DELETE FROM "feedback" WHERE "id"= $1;';

    pool.query(sqlText, [reqId])
    .then((result) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log('error DELETE server', err);
        res.sendStatus(500);
    })
})
module.exports = router;