"use strict";

function removeBookControllerModal () {
  const ctrl = this;

  ctrl.confirm = confirm;
  ctrl.cancel = cancel;

  function confirm () {
    ctrl.close();
  }

  function cancel () {
    ctrl.dismiss({ $value: "cancel" });
  }
}

module.exports = [
  removeBookControllerModal
];
