const express = require('express')
const mysql = require('mysql');
const cors = require('cors')
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//Parse EmberJS requests body
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "contactsapp"
});


connection.connect();

app.get('/', (req, res) => {
    res.send('Contacts App API')
});


app.get("/v1/contacts", (req, res) => {
    connection.query("SELECT * FROM contacts", (err, result) => {
        if(err) throw err;
        res.status(200).send(result);
    });
});

app.get("/v1/contacts/:id", (req, res) => {
    connection.query("SELECT * FROM contacts WHERE id = " + req.params.id + " LIMIT 1", (err, result) => {
        if(err) throw err;
        res.status(200).send(result[0]);
    });
});

app.post("/v1/contacts", (req, res) => {
    if(!req.body.name)
    {
        throw "No Body";
    }
    connection.query(`INSERT INTO contacts (name, email, mobile) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.mobile}')`, (err, result) => {
        if(err) throw err;
        res.status(200).send(result);
    });
});

app.patch("/v1/contacts/:id", (req, res) => {
    connection.query(`UPDATE contacts SET name='${req.body.name}', email='${req.body.email}', mobile='${req.body.mobile}' WHERE id = ${req.params.id}`, (err, result) => {
        if(err) throw err;
        res.status(200).send(result);
    });
});

app.delete("/v1/contacts/:id", (req, res) => {
    connection.query(`DELETE FROM contacts WHERE id = ${req.params.id}`, (err, result) => {
        if(err) throw err;
        res.status(200).send(result);
    });
});




app.listen(3000, () => {
    console.log('Contacts App listening on port 3000!')
});



