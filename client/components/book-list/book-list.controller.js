"use strict";

function bookListController (bookService) {
  const ctrl = this;

  ctrl.$onInit = initialize;

  function initialize () {
    return bookService.list()
      .then(books => ctrl.books = books)
      .catch(() => ctrl.error = "Unable to load books !")
    ;
  }
}

module.exports = [
  "bookService",
  bookListController
];
