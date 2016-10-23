"use strict";

function bookDetailController (bookService, $stateParams) {
  const ctrl = this;

  ctrl.$onInit = initialize;

  function initialize () {
    return bookService.get($stateParams.id)
      .then(book => ctrl.book = book)
      .catch(() => ctrl.error = "Unable to find this book !")
    ;
  }
}

module.exports = [
  "bookService",
  "$stateParams",
  bookDetailController
];
