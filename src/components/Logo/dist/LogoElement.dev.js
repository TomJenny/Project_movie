"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoLink = void 0;

var _reactRouterDom = require("react-router-dom");

var _styledBreakpoints = require("styled-breakpoints");

var _macro = _interopRequireWildcard(require("styled-components/macro"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      display: none;\n      ", " {\n        display: block !important;\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  position: absolute;\n  z-index: 9999999;\n  left: 5%;\n  top: 15px;\n\n  & img {\n    display: block;\n    width: 110px;\n    margin: 0 auto;\n  }\n\n  transition: all 0.5s ease;\n\n  &:hover {\n    transform: translateY(-5px);\n    filter: drop-shadow(0 0 10px black) brightness(1.2);\n  }\n  ", "\n  ", " {\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LogoLink = (0, _macro["default"])(_reactRouterDom.Link)(_templateObject(), function (props) {
  return props.display && (0, _macro.css)(_templateObject2(), (0, _styledBreakpoints.down)("sm"));
}, (0, _styledBreakpoints.down)("sm"));
exports.LogoLink = LogoLink;