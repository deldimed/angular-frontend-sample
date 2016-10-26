"use strict";

function bookService (backendUrl, $http) {
  const service = {
    list: list,
    add: add,
    get: get,
    remove: remove
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

  function get (id) {
    return $http.get(`${backendUrl}/books/${id}`)
      .then(response => response.data)
    ;
  }

  function remove (id) {
    return $http.delete(`${backendUrl}/books/${id}`)
      .then(response => response.data)
    ;
  }
}

module.exports = [
  "backendUrl",
  "$http",
  bookService
];
