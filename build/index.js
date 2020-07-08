"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var morgan = require("morgan");
var helmet = require("helmet");
// Create a new express app instance
var app = express();
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3000, function () {
    // eslint-disable-next-line no-console
    console.log('App is listening on port 3000!');
});
