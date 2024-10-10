const fs = require('fs');
const pg = require('pg');
const url = require('url');
// require('dotenv').config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: true,
        ca: process.env.SSL_CERT
    },
};

//create a Postgresql client
const client = new pg.Client(config);

client.connect(function (err) {
    if (err) {
        throw err.message;
        return
    }
    console.log("Database connection established.");
});

//use client outside this file
module.exports = client;
