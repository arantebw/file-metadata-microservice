'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sass = require('node-sass-middleware');

const app = express();

// Middlewares

// Bootstrap
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));

// jQuery
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

// Popper
app.use('/popper', express.static(__dirname + '/node_modules/popper.js/dist/umd/'));

// Font Awesome
app.use('/fontawesome', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/'));

// Sass
app.use(sass({
    src: __dirname + '/assets',
    dest: __dirname + '/public',
    debug: true,
    outputStyle: 'compressed'
}));

// Public assets
app.use(express.static(__dirname + '/public/'));

app.use(cors());

// Routes

// Root
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT, function() {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
