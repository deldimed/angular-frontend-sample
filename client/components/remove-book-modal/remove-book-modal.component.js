"use strict";

const component = {
  bindings: {
    close: "&",
    dismiss: "&",
  },
  controller: require("./remove-book-modal.controller"),
  template: require("ng-cache!./remove-book-modal.component.html")
};

module.exports = component;
