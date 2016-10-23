"use strict";

function bookService ($q) {
  const service = {
    list: list
  };

  return service;

  function list () {
    return $q.when([]);
  }
}

module.exports = [
  "$q",
  bookService
];
