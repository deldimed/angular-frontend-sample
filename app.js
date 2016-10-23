"use strict";

const express = require("express");
const app = express();

// middlewares
app.all("*", (req, res) => {
  res.sendStatus(404);
});

module.exports = app;
