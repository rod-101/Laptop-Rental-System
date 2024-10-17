require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const cors = require('cors')

const dbclient = require('./database.js');
app.use(express.json())
app.use(cors())



//for Login
app.post('/login', (req, res) => {
    const { email, password, user_type } = req.body;
    
    const queryString = `SELECT * FROM users WHERE email = $1 AND password = $2 AND user_type = $3`
    dbclient.query(queryString, [email, password, user_type], (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).send('Error querying the database.');
        }

        if (result.rows.length > 0) {
            return res.json(result.rows[0]); //sends a json formatted response back to client
        } else {
            return res.status(401).send('Access denied.');
        }
    })
})

//for Signup
app.post('/signup', (req, res) => {
    const {username, email, password, user_type} = req.body;
    const queryString = `INSERT INTO users (username, email, password, user_type) VALUES ($1, $2, $3, $4) RETURNING user_id`

    dbclient.query(queryString, [username, email, password, user_type], (err, result) => {
        if(err) {
            console.error(err);
            return res.status(500).send('Error querying the database.')
        }

        //returns user_id so we know what type of account to display
        res.send(result)
    })
})

app.post('/my-devices', (req, res) => {
    const { owner } = req.body
    const queryString = 'SELECT model, device_name, device_id FROM devices WHERE "owner" = $1'
    dbclient.query(queryString, [owner], (err, result) => {
        if(err) {
            console.log(err)
            return res.status(500).send('Error querying the database.')
        }
        return res.send(result)
    })
})

app.post('/add-device', (req, res) => {
    const {owner, device_name, model, specs, condition, availability, apps, issues, terms_conditions} = req.body

    const queryString = 'INSERT INTO devices (owner, device_name, model, specs, condition, availability, apps, issues, terms_conditions) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)'
    dbclient.query(queryString, [owner, device_name, model, specs, condition, availability, apps, issues, terms_conditions], (err, result) => {
        if(err){
            console.log(err)
            return res.status(500).send('Error querying the database.')
        } 
        return res.send(result)
    })
})

//check on signup
app.get('/emailIsAvailable', (req, res) => {
    const {email} = req.query

    const queryString = 'SELECT * FROM users WHERE email = $1'
    dbclient.query(queryString, [email], (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).send('Error querying the database')
        }

        if(result.rows.length > 0) {
            return res.status(409).send('Email already exists.')
        } else {
            return res.status(200).send('Email is available.')
        }
    })
})

app.post('/count-devices/:owner', (req, res) => {
    const owner = req.params.owner;
    const queryString = `SELECT device_id FROM devices WHERE "owner" = $1`
    dbclient.query(queryString, [owner], (err, result) => {
        if(err){
            console.log(err)
            return res.status(500).send("Error querying the database.")
        }

        if (result.rows.length > 0) {
            return res.send(result); //sends a json formatted response back to client
        } else {
            return res.send(result);
        }
        
    })
})

app.post('/count-requests/:owner', (req, res) => {
    const owner = req.params.owner;
    const queryString = `SELECT * FROM requests WHERE "owner" = $1`
    dbclient.query(queryString, [owner], (err, result) => {
        if(err){
            console.log(err)
            return res.status(500).send("Error querying the database.")
        }
        if (result.rows.length > 0) {
            return res.send(result); //sends a json formatted response back to client
        } else {
            return res.status(401).send('There are no requests.');
        }
        
    })
})

app.post('/requests', (req, res) => {
    const {owner} = req.body

    const queryString = `
        SELECT requests.*, users.username
        FROM requests
        INNER JOIN users ON requests.requester = users.user_id
        WHERE "owner" = $1
    `;

    dbclient.query(queryString, [owner], (err, result) => {
        if(err) {
            return res.status(500).send("Internal Server Error") 
        }
        res.status(200).send(result.rows)
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