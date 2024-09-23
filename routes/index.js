const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Define the root route
router.get('/', (req, res) => {
  db.query('SELECT NOW() AS currentTime', (error, results) => {
    if (error) {
      return res.status(500).send('Error querying the database.');
    }
    res.send('Current time from MySQL RDS: ' + results[0].currentTime);
  });
});

module.exports = router;
