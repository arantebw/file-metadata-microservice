'use strict';

const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

// Middlewares

app.use(cors());

// Routes

// Root
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT, function() {
    console.log(`app is running at http://localhost:${process.env.PORT}`);
});
