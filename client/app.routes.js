"use strict";

function configureRoutes ($locationProvider, $stateProvider, $urlMatcherFactoryProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state("home", {
      redirectTo: "books.list",
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
    .state("books.detail", {
      template: "<app-book-detail></app-book-detail>",
      url: "/:id"
    })
    .state("books.update", {
      template: "<app-modify-book></app-modify-book>",
      url: "/:id/modify"
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
