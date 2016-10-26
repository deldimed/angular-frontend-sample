"use strict";

const component = {
  bindings: {
    book: "="
  },
  require: {
    parentForm: "^form"
  },
  template: require("ng-cache!./book-editor.component.html")
};

module.exports = component;
