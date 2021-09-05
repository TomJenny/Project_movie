"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashBoardLogoColor = exports.DashboardLogo = exports.DashboardLogoContent = exports.DashboardLogoContainer = void 0;

var _macro = _interopRequireDefault(require("styled-components/macro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 10px;\n  width: 20px;\n  height: 20px;\n  background: ", ";\n  margin: 0 10px;\n  filter: drop-shadow(0 0 1px black);\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 30px;\n  filter: drop-shadow(0 0 1px black);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  padding: 5px 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 20px auto;\n  width: 100%;\n  height: 80px;\n\n  padding: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DashboardLogoContainer = _macro["default"].div(_templateObject());

exports.DashboardLogoContainer = DashboardLogoContainer;

var DashboardLogoContent = _macro["default"].div(_templateObject2());

exports.DashboardLogoContent = DashboardLogoContent;

var DashboardLogo = _macro["default"].img(_templateObject3());

exports.DashboardLogo = DashboardLogo;

var DashBoardLogoColor = _macro["default"].div(_templateObject4(), function (props) {
  return props.color;
});

exports.DashBoardLogoColor = DashBoardLogoColor;