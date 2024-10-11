require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const cors = require('cors')

const dbclient = require('./database.js');
app.use(express.json())
app.use(cors())




app.post('/login', (req, res) => {
    const { email, password, user_type } = req.body;
    
    const queryString = `SELECT * FROM users WHERE email = $1 AND password = $2 AND user_type = $3`
    dbclient.query(queryString, [email, password, user_type], (err, result) => {
        if (err) {
            return res.status(500).send('Internal Server Error.');
        }

        if (result.rows.length > 0) {
            return res.json(result.rows[0]); //sends a json formatted response back to client
        } else {
            return res.status(401).send('Access denied.');
        }
    })
})

app.post('/signup', (req, res) => {
    const {username, email, password, user_type} = req.body;
    const queryString = `INSERT INTO users (username, email, password, user_type) VALUES ($1, $2, $3, $4) RETURNING user_id, user_type`

    dbclient.query(queryString, [username, email, password, user_type], (err, result) => {
        if(err) {
            console.error(err);
            return res.status(500).send('Error querying the database.')
        }
        res.send(result)
    })
})

app.get('/data/:id', (req, res) => {
    const {id} = req.params;
    dbclient.query(`SELECT * FROM users WHERE user_id = ${id}`, (err, result) => {
        if(err) throw err;
        res.json(result)
    })
})

app.get('/data', (req, res) => {
    dbclient.query("SELECT * FROM users", (err, result) => {
        if(err) throw err;
        res.json(result);
    })
})

app.get('/dbuser', (req, res) => {
    res.status(200).send(`This route listens for get requests at /dbuser`)
})

app.listen(port, () => {
    console.log(`The server is listening to port ${port}.`);    
})