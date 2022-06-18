const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET');
    pool.query('SELECT * from "feedback";')
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET', error)
        res.sendStatus(500);
    });
} ) 

router.post('/', (req, res) => {
    const addReview = req.body;
    console.log(req.body)

    const sqlText = `
        INSERT INTO "feedback"
            ("feeling", "understanding", "support", "comments")
        VALUES
            ($1, $2,$3,$4);
        `;
    const sqlValues = [
        addReview.feeling,
        addReview.understanding,
        addReview.support,
        addReview.comment
    ]
    pool.query(sqlText, sqlValues)
        .then((res) => {
            console.log('Added feedback to the database');
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Error making database query', error);
            res.sendStatus(500);
        })
})


module.exports = router;