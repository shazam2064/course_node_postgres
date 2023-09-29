const express = require('express');
const pool = require('./db')

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'The monsters api server is running.'
    })
});

app.get('/monsters', (request, response, next) => {
    pool.query('SELECT * FROM monsters ORDER BY id ASC', (err, res) => {
        if (err) return next(err);

        response.json(res.rows);
    });
});

app.use((err, req, res, next) => {
    res.json(err);
})

module.exports = app;