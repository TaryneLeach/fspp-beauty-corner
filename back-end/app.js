// DEPENDENCIES
const cors = require('cors');
const express = require('express');
const makeupController = require('./Controllers/makeupController.js')
const perfumeController = require('./Controllers/perfumeController.js')

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use('/makeups', makeupController)
app.use('/perfumes', perfumeController)



// ROUTES

app.get('/', (req, res) => {
	res.send('Welcome To The Girls Room!');
});

app.get('*', (req, res) => {
	res.status(404).send('Wrong beauty aisle!!');
});


module.exports = app;