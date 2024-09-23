const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');

app.use(express.json()); 
// Import the routes
const indexRoute = require('./routes/index');

// Use the root route
app.use('/', indexRoute);
app.use('/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
