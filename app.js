"use strict";

const express = require("express");
const compression = require("compression");
const app = express();

// middlewares
app.use(compression());
app.all("*", (req, res) => {
  res.sendStatus(404);
});

module.exports = app;
