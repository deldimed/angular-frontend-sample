"use strict";

const angular = require("angular");
const app = angular.module("app", [
  require("angular-messages")
]);

// Components
app.component("appHome", require("./components/home"));
app.component("appAddingBook", require("./components/adding-book"));
app.component("appBookList", require("./components/book-list"));

// Constants
app.constant("backendUrl", "http://localhost:3001");

// Factories
app.factory("bookService", require("./services/book"));

module.exports = app.name;
