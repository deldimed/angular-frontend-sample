"use strict";

const angular = require("angular");
const app = angular.module("app", [
  require("angular-animate"),
  require("angular-messages"),
  require("angular-ui-bootstrap"),
  require("angular-ui-router")
]);

// Components
app.component("appNav", require("./components/nav"));
app.component("appAddBook", require("./components/add-book"));
app.component("appModifyBook", require("./components/modify-book"));
app.component("appBookList", require("./components/book-list"));
app.component("appBookDetail", require("./components/book-detail"));
app.component("appBookEditor", require("./components/book-editor"));
app.component("appRemoveBookModal", require("./components/remove-book-modal"));

// Configuration
app.config(require("./app.routes"));

// Constants
app.constant("backendUrl", "http://localhost:3001");

// Factories
app.factory("bookService", require("./services/book"));

// Run
app.run(require("./app.route-redirect"));

module.exports = app.name;
