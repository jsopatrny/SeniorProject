const express = require('express');
const router = express.Router();

const {json} = require('body-parser');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'fantasy_collecting',
});

router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM microresearch', (err, results, fields) => {
    res.send(results);
  });
});

router.get('/:id', function(req, res, next) {
  // check if it's a username or an identifier

  // if username is in our microresearch database, search by username

  // if painting is in our microresearch database, search by identifier
  connection.query(`SELECT * FROM microresearch WHERE identifier = '${req.params.id}'`, (err, results, fields) => {
    res.send(results);
  });
});

router.post('/', json(), function(req, res, next) {
  if (!req.body.username || !req.body.identifier) {
    res.sendStatus(400);
  } else {
    const dbEntry = [
      req.body.username,
      req.body.identifier,
      req.body.information,
      req.body.timestamp,
    ];

    // dbEntry[3] (corresponding to our datetime object) needs to be converted to something mysql can accept
    dbEntry[3] = new Date(dbEntry[3]).toISOString().slice(0, 19).replace('T', ' ');

    for (const i in dbEntry) {
      if (typeof(dbEntry[i]) === 'string') {
        dbEntry[i] = `'${dbEntry[i]}'`;
      }
    }

    const dbEntryArgs = dbEntry.join(', ');

    connection.query(`INSERT INTO microresearch VALUES (${dbEntryArgs})`, (err, results, fields) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });

  }
});

router.put('/:id', json(), function(req, res, next) {
  res.send('PUT /microresearch/' + req.params.id);
});

router.delete('/:id', function(req, res, next) {
  res.send('DELETE /microresearch/' + req.params.id);
});

module.exports = router;
