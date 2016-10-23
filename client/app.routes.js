"use strict";

function configureRoutes ($locationProvider, $stateProvider, $urlMatcherFactoryProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state("home", {
      template: "<app-home></app-home>",
      url: "/"
    })
    .state("books", {
      abstract: true,
      template: "<ui-view></ui-view>",
      url: "/books"
    })
    .state("books.list", {
      template: "<app-book-list></app-book-list>",
      url: ""
    })
    .state("books.add", {
      template: "<app-add-book></app-add-book>",
      url: "/add"
    })
  ;

  $urlMatcherFactoryProvider.strictMode(false);
}

module.exports = [
  "$locationProvider",
  "$stateProvider",
  "$urlMatcherFactoryProvider",
  configureRoutes
];
