const path = require("path");
const express = require("express");
const app = express();
//
const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath)); // so this will load static data from publicPath file.

app.listen(5000);
