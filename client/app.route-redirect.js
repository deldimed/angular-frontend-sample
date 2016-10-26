"use strict";

function routeRedirect ($rootScope, $state) {
  $rootScope.$on("$stateChangeStart", (event, toState, toParams) => {
    if (toState.redirectTo) {
      event.preventDefault();
      $state.go(toState.redirectTo, toParams, { location: "replace" });
    }
  });
}

module.exports = [
  "$rootScope",
  "$state",
  routeRedirect
];
