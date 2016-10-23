"use strict";

function bookService (backendUrl, $http) {
  const service = {
    list: list
  };

  return service;

  function list () {
    return $http.get(`${backendUrl}/books`)
      .then(response => response.data)
    ;
  }
}

module.exports = [
  "backendUrl",
  "$http",
  bookService
];
