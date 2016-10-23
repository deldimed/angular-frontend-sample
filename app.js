"use strict";

const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const app = express();

// middlewares
app.use(compression());
app.use(helmet());
app.all("*", (req, res) => {
  res.sendStatus(404);
});

module.exports = app;
