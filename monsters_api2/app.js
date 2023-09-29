const express = require('express');
const pool = require('./db')

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'The monsters api server is running.'
    })
});

app.get('/monsters', (request, response) => {
    pool.query('SELECT * FROM monsters ORDER BY id ASC', (err, res) => {
        if (err) return console.log(err);

        response.json(res.rows);
    });
});

module.exports = app;