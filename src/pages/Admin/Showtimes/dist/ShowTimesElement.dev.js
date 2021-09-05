"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminShowtimeImage = exports.AdminShowTimeFilmName = exports.AdminShowtimeFormContainer = exports.AdminShowtimesContainer = void 0;

var _antd = require("antd");

var _macro = _interopRequireDefault(require("styled-components/macro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 180px;\n  height: 250px;\n  border-radius: 5px;\n  filter: drop-shadow(0 0 1px ", ");\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.2rem;\n  text-transform: uppercase;\n  text-align: center;\n  color: white;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 5px;\n  background: ", ";\n  padding: 30px 10px 30px;\n  height: auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AdminShowtimesContainer = _macro["default"].div(_templateObject());

exports.AdminShowtimesContainer = AdminShowtimesContainer;

var AdminShowtimeFormContainer = _macro["default"].div(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.black1;
});

exports.AdminShowtimeFormContainer = AdminShowtimeFormContainer;

var AdminShowTimeFilmName = _macro["default"].h1(_templateObject3());

exports.AdminShowTimeFilmName = AdminShowTimeFilmName;
var AdminShowtimeImage = (0, _macro["default"])(_antd.Image)(_templateObject4(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.secondary;
});
exports.AdminShowtimeImage = AdminShowtimeImage;