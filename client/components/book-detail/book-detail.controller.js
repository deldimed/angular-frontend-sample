"use strict";

function bookDetailController (bookService, $stateParams, $uibModal, $state) {
  const ctrl = this;

  ctrl.remove = remove;
  ctrl.$onInit = initialize;

  function remove () {
    const modal = $uibModal.open({
      animation: true,
      component: "appRemoveBookModal"
    });

    modal.result
      .then(() => bookService.remove($stateParams.id))
      .then(() => $state.go("books.list"))
      .catch(() => ctrl.error = "Unable to remove this book !")
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
  "$uibModal",
  "$state",
  bookDetailController
];
