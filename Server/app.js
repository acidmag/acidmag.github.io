// Get dependencies
const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Get our API routes
const api = require('./routes/api');
// const user = require('./routes/users');

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';

// Connect to mLab database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log("Connected to database" + config.database);
})

// On Error
mongoose.connection.on('error', (err) => {
  console.log("Error in database: " + err);
})

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// Set our api routes
app.use('/api', api);


// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});


/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
