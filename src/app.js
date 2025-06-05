const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();

// Import database connection
const { testConnection } = require('./config/db.config');

// Initialize express app
const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(morgan('dev')); // Logging
app.use(cors()); // CORS handling
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Import routes
const Routes = require('./routes/app.routes');

// API routes
app.get('/', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Toyfort Node.Js Backend' });
}
)

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Mount routes
app.use('/api', Routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found'
  });
});

// Test database connection on startup
testConnection()
  .then(connected => {
    if (!connected) {
      console.warn('Warning: Database connection failed. Some features may not work properly.');
    }
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // For testing 