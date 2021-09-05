"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = exports.LoadingContainer = exports.LoadingImg = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _setting = require("../../utils/setting");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background-image: linear-gradient(45deg, transparent, transparent 40%, red);\n  animation: ", " 2s linear infinite;\n\n  &::before {\n    content: \"\";\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    bottom: 5px;\n    left: 5px;\n    background-color: #000;\n    border-radius: 50%;\n    z-index: 100;\n  }\n\n  &::after {\n    content: \"\";\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    background-image: linear-gradient(45deg, transparent, transparent 40%, red);\n    border-radius: 50%;\n    z-index: 1;\n    filter: blur(30px);\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    transform: translate(-50%, -50%) rotate(0deg);\n    filter: hue-rotate(0deg);\n  }\n  \n  100% {\n    transform: translate(-50%, -50%) rotate(360deg);\n    filter: hue-rotate(360deg);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  overflow: hidden;\n\n  width: 100vw;\n  height: 100vh;\n  z-index: 9999999999;\n  background: ", "};\n  background: url(", "\"/img/galaxy3.jpg\");\n  background-size: contain;\n  transition: all 0.2s linear;\n  opacity: 0;\n    -webkit-animation: ", " 4s; /* Safari, Chrome and Opera > 12.1 */\n       -moz-animation: ", " 4s; /* Firefox < 16 */\n        -ms-animation: ", " 4s; /* Internet Explorer */\n         -o-animation: ", " 4s; /* Opera < 12.1 */\n            animation: ", " 4s;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 110px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([" \n    from { opacity: 1; }\n    to   { opacity: 0; }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var fadeout = (0, _styledComponents.keyframes)(_templateObject());

var LoadingImg = _styledComponents["default"].img(_templateObject2());

exports.LoadingImg = LoadingImg;

var LoadingContainer = _styledComponents["default"].div(_templateObject3(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.black1;
}, _setting.PUBLIC_URL, fadeout, fadeout, fadeout, fadeout, fadeout);

exports.LoadingContainer = LoadingContainer;
var rotateLoader = (0, _styledComponents.keyframes)(_templateObject4());

var Loader = _styledComponents["default"].div(_templateObject5(), rotateLoader);

exports.Loader = Loader;