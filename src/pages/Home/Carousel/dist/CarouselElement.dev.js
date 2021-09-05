"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Arrow = exports.Wheel = exports.Mouse = exports.MouseScroll = exports.CarouselArrowLeft = exports.CarouselArrowRight = exports.CarouselArrowBackground = exports.CarouselImg = exports.CarouselBackgroundOverlay = exports.CarouselSlider = exports.CarouselPlayButton = exports.CarouselContainer = void 0;

var _icons = require("@ant-design/icons");

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _PlayButton = require("../../../components/Styles/PlayButton");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n        -webkit-animation-delay: 0.3s;\n        -moz-animation-delay: 0.3s;\n        -webkit-animation-direction: alternate;\n\n        animation-delay: 0.3s;\n        animation-direction: alternate;\n      "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n        -webkit-animation-delay: 0.2s;\n        -moz-animation-delay: 0.2s;\n        -webkit-animation-direction: alternate;\n\n        animation-direction: alternate;\n        animation-delay: alternate;\n      "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  width: 26px;\n  height: 26px;\n  -ms-transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n\n  border-right: 3px solid white;\n  border-bottom: 3px solid white;\n  margin: 0 0 3px 6px;\n\n  -webkit-animation: ", " 1s infinite;\n  -moz-animation: ", " 1s infinite;\n  animation: ", " 1s infinite;\n\n  ", "\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n 0%   { opacity: 0; }\n  50%  { opacity: .5; }\n  100% { opacity: 1; }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  height: 20px;\n  width: 20px;\n  display: block;\n  margin: 6px auto;\n  background: white;\n  box-shadow: 0 0 2px black;\n  position: relative;\n  border-radius: 50%;\n\n  -webkit-animation: ", " 2s ease infinite;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n 0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(30px);\n    -ms-transform: translateY(30px);\n    transform: translateY(30px);\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  height: 70px;\n  width: 40px;\n  background: transparent;\n\n  backdrop-filter: blur(2px);\n  -webkit-backdrop-filter: blur(2px);\n  border-radius: 20px;\n  transform: none;\n  border: 3px solid white;\n  top: 170px;\n\n  &:hover {\n    box-shadow: 0 0 10px white;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 99999;\n  bottom: 35px;\n  left: 50%;\n  transform: translateX(-50%);\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(255, 255, 255, 0.2);\n  font-size: 40px;\n  position: absolute;\n  z-index: 9999;\n  left: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  ", ":hover & {\n    color: white;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(255, 255, 255, 0.3);\n  font-size: 40px;\n  position: absolute;\n  z-index: 9999;\n  right: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  ", ":hover & {\n    color: white;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n        left: 0;\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n        right: 0;\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  width: 80px;\n\n  position: absolute;\n  z-index: 99;\n  top: 49%;\n\n  ", "\n  &::before {\n    display: none;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  height: 750px;\n  width: 100%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 25%;\n  width: 100%;\n  background: linear-gradient(to top, rgba(0, 0, 0, 1), transparent);\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  &:hover ", " {\n    opacity: 1;\n    transition: all 0.5 ease-in-out;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 35px;\n  padding: 18px;\n  opacity: 0;\n  &:hover {\n    transform: translate(-50%, -50%) scale(1.1);\n    transition: all 0.5 ease-in-out;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 750px;\n  position: relative;\n  background-image: url(", ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CarouselContainer = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.srcImg;
});

exports.CarouselContainer = CarouselContainer;
var CarouselPlayButton = (0, _styledComponents["default"])(_PlayButton.PlayButtonStyled)(_templateObject2());
exports.CarouselPlayButton = CarouselPlayButton;
var CarouselSlider = (0, _styledComponents["default"])(_reactSlick["default"])(_templateObject3(), CarouselPlayButton);
exports.CarouselSlider = CarouselSlider;

var CarouselBackgroundOverlay = _styledComponents["default"].div(_templateObject4());

exports.CarouselBackgroundOverlay = CarouselBackgroundOverlay;

var CarouselImg = _styledComponents["default"].img(_templateObject5());

exports.CarouselImg = CarouselImg;

var CarouselArrowBackground = _styledComponents["default"].div(_templateObject6(), function (props) {
  return props.right && (0, _styledComponents.css)(_templateObject7()) || props.left && (0, _styledComponents.css)(_templateObject8());
});

exports.CarouselArrowBackground = CarouselArrowBackground;
var CarouselArrowRight = (0, _styledComponents["default"])(_icons.RightOutlined)(_templateObject9(), CarouselArrowBackground);
exports.CarouselArrowRight = CarouselArrowRight;
var CarouselArrowLeft = (0, _styledComponents["default"])(_icons.LeftOutlined)(_templateObject10(), CarouselArrowBackground); // MOUSE SCROLL

exports.CarouselArrowLeft = CarouselArrowLeft;

var MouseScroll = _styledComponents["default"].span(_templateObject11()); //Mouse


exports.MouseScroll = MouseScroll;

var Mouse = _styledComponents["default"].div(_templateObject12()); //Wheel


exports.Mouse = Mouse;
var WheelAnimation = (0, _styledComponents.keyframes)(_templateObject13());

var Wheel = _styledComponents["default"].div(_templateObject14(), WheelAnimation); //Arrow


exports.Wheel = Wheel;
var ArrowAnimation = (0, _styledComponents.keyframes)(_templateObject15());

var Arrow = _styledComponents["default"].span(_templateObject16(), ArrowAnimation, ArrowAnimation, ArrowAnimation, function (props) {
  return props.top && (0, _styledComponents.css)(_templateObject17()) || props.center && (0, _styledComponents.css)(_templateObject18());
});

exports.Arrow = Arrow;