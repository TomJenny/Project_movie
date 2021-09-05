"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayButtonStyled = void 0;

var _icons = require("@ant-design/icons");

var _macro = _interopRequireDefault(require("styled-components/macro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: rgba(0, 0, 0, 0.5);\n\n  position: absolute;\n  z-index: 9999999999;\n  top: 50%;\n  left: 50%;\n\n  font-size: 25px;\n  color: rgba(255, 255, 255, 0.8);\n\n  padding: 15px;\n  border-radius: 50%;\n  border: 2px solid rgba(255, 255, 255, 0.8);\n\n  transform: translate(-50%, -50%);\n  opacity: 1;\n  transition: all 0.5 ease-in-out;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//Play button overlay
var PlayButtonStyled = (0, _macro["default"])(_icons.CaretRightOutlined)(_templateObject());
exports.PlayButtonStyled = PlayButtonStyled;