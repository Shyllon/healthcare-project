const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const config = require('./config/config.json'); 

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
        dialect: config.development.dialect
    }
);

// Test the connection
sequelize.authenticate()
    .then(() => console.log('Database connected successfully!'))
    .catch(err => {console.error('Unable to connect to the database:', err)
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
