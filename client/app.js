"use strict";

const angular = require("angular");
const app = angular.module("app", [
  require("angular-messages"),
  require("angular-ui-router")
]);

// Components
app.component("appHome", require("./components/home"));
app.component("appNav", require("./components/nav"));
app.component("appAddBook", require("./components/add-book"));
app.component("appBookList", require("./components/book-list"));
app.component("appBookDetail", require("./components/book-detail"));
app.component("appRemoveBookModal", require("./components/remove-book-modal"));

// Configuration
app.config(require("./app.routes"));

// Constants
app.constant("backendUrl", "http://localhost:3001");

// Factories
app.factory("bookService", require("./services/book"));

module.exports = app.name;
