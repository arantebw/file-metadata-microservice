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

app.listen(process.env.PORT, process.env.HOSTNAME, function() {
    console.log(`app is running at http://${process.env.HOSTNAME}:${process.env.PORT}`);
});
