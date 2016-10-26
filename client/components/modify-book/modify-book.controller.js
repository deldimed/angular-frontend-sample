"use strict";

function modifyBookController (bookService, $stateParams, $state) {
  const ctrl = this;

  ctrl.modifyBook = modifyBook;
  ctrl.$onInit = initialize;

  function modifyBook (valid) {
    if (!valid) {
      return;
    }

    return bookService.update($stateParams.id, ctrl.book)
      .then(book => $state.go("books.detail", { id: book.id }))
      .catch(error => ctrl.error = error)
    ;
  }

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
  "$state",
  modifyBookController
];
