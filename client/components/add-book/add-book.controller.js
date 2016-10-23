"use strict";

function addBookController (bookService) {
  const ctrl = this;

  ctrl.addBook = addBook;

  function addBook (valid) {
    if (!valid) {
      return;
    }
  }
}

module.exports = [
  "bookService",
  addBookController
];
