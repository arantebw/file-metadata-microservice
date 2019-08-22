'use strict';

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

let port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`app is running at http://localhost:${port}`);
});
