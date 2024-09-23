require('dotenv').config(); // Loads environment variables from .env
const mysql = require('mysql2');

// Create the database connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectTimeout: 30000 // 30 seconds timeout
});


// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to MySQL RDS as ID ' + connection.threadId);
});

module.exports = connection;
