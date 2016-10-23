"use strict";

const angular = require("angular");
const app = angular.module("app", []);

// Components
app.component("appHome", require("./components/home"));
app.component("appBookList", require("./components/book-list"));

// Factories
app.factory("bookService", require("./services/book"));

module.exports = app.name;