const express = require('express');
const { Sequelize } = require('sequelize');
const config = require('./config/config.json');

const app = express();

// Middleware
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Healthcare Backend is running!');
});

// Initialize Sequelize with development settings
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

// Test the connection
sequelize.authenticate()
  .then(() => console.log('Database connected successfully!'))
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = app; // Export the app for use in index.js
