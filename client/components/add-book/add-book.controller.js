"use strict";

function addBookController (bookService, $state) {
  const ctrl = this;

  ctrl.addBook = addBook;

  function addBook (valid) {
    if (!valid) {
      return;
    }

    return bookService.add(ctrl.book)
      .then(book => $state.go("book.detail", { id: book.id }))
      .catch(error => ctrl.error = error)
    ;
  }
}

module.exports = [
  "bookService",
  "$state",
  addBookController
];
