"use strict";

function bookService (backendUrl, $http) {
  const service = {
    list: list,
    add: add
  };

  return service;

  function list () {
    return $http.get(`${backendUrl}/books`)
      .then(response => response.data)
    ;
  }

  function add (book) {
    return $http.post(`${backendUrl}/books`, book)
      .then(response => response.data)
    ;
  }
}

module.exports = [
  "backendUrl",
  "$http",
  bookService
];
