"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideLoadingAction = exports.displayLoadingAction = void 0;

var _LoadingType = require("./types/LoadingType");

var displayLoadingAction = {
  type: _LoadingType.DISPLAY_LOADING
};
exports.displayLoadingAction = displayLoadingAction;
var hideLoadingAction = {
  type: _LoadingType.HIDE_LOADING
};
exports.hideLoadingAction = hideLoadingAction;