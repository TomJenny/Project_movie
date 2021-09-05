"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpinStyled = void 0;

var _antd = require("antd");

var _macro = _interopRequireDefault(require("styled-components/macro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  z-index: 99999999;\n  width: 100%;\n  height: auto;\n  display: block !important;\n  margin-top: 50px;\n  justify-content: center;\n  color: red;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SpinStyled = (0, _macro["default"])(_antd.Spin)(_templateObject());
exports.SpinStyled = SpinStyled;