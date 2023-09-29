const {Pool} = require('pg');

const pool = new Pool({
    user: 'node_user',
    password: 'node_password',
    // user: 'postgres',
    // password: 'secret',
    host: 'localhost',
    database: 'monstersdb',
    port: 5432
});

pool.query('SELECT * FROM monsters', (err, res) => {
    if (err) return console.log(err);

    console.log(res);
});