"use strict";

const angular = require("angular");
const app = angular.module("app", []);

// Components
app.component("appHome", require("./components/home"));
app.component("appBookList", require("./components/book-list"));

module.exports = app.name;
