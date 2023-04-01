const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//POST
router.post('/', (req, res) => {

    const newNumbers = req.body;
    console.log('newNubers in in POST server', newNumbers);

    const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`

    pool.query(sqlText, [newNumbers.feeling, newNumbers.understanding, newNumbers.support, newNumbers.comments])
    .then((result) => {
        console.log(result);
        res.sendStatus(201);
    }).catch((err) => {
        console.log('error in query POST', err)
        res.sendStatus(500)
    })

})

module.exports = router;