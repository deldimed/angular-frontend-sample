"use strict";

const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const path = require("path");
const root = path.join(__dirname, "public");
const app = express();

// middlewares
app.use(compression());
app.use(helmet());
app.use(express.static(root));
app.all("*", (req, res) => {
  res.sendFile("index.html", { root: root });
});

module.exports = app;
