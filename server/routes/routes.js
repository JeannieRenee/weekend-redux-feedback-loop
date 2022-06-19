const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET route
router.get('/', (req, res) => {
    console.log('GET');
    pool.query('SELECT * from "feedback" ORDER BY "date" DESC, "id" DESC;')
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET', error)
        res.sendStatus(500);
    });
} ) 

//POST route
router.post('/', (req, res) => {
    const addReview = req.body;
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
        addReview.comments
    ]
    pool.query(sqlText, sqlValues)
    // i took out the response codes in the .then and ,catch because i was getting both errors thrown. 
    // i know it was not the right fix but couldn't figure it out. 
    // everything was working properly without them so i threw them away lol 
    // please tell me the right solution 
        .then((dbRes) => {
            console.log('Added feedback to the database');
        })
        .catch((error) => {
            console.log('Error making database query', error);
        })
})


module.exports = router;