const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Register a new user
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(query, [name, email, password], (err, result) => {
    if (err) {
      return res.status(500).send('Error registering user: ' + err.message);
    }
    res.send('User registered successfully!');
  });
});

// Login user
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      return res.status(500).send('Error logging in: ' + err.message);
    }

    if (results.length === 0) {
      return res.status(401).send('Invalid email or password.');
    }

    res.send('Login successful!');
  });
});

module.exports = router;
