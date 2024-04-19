const {Pool} =require('pg');

const pool = new Pool({
    user: process.env.DB__USER,
    host: process.env.DB__HOST,
    database: process.env.DB__DATABASE,
    password: process.env.DB__PASSWORD,
    port: process.env.DB__PORT,
})

module.exports = pool; 