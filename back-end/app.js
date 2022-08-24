// DEPENDENCIES
const cors = require('cors');
const express = require('express');

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// CONFIGURATION
const app = express();

// ROUTES

app.get('/', (req, res) => {
	res.send('Welcome To The Girls Room!');
});

app.get('*', (req, res) => {
	res.status(404).send('Wrong beauty aisle!!');
});
