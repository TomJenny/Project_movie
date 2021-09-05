"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BookTicketCountDownSec = exports.BookTicketCountDownMin = exports.BookTicketCountDown = exports.BookTicketDescribleSeats = exports.BookTicketContainerSeats = exports.BookTicketBackgroundScreen = exports.BookTicketBorderScreen = exports.BookTicketScreen = exports.BookTiketAlphabetText = exports.BookTicketName = exports.BookTicketAddress = exports.Seats = exports.BookTicketCinemaImg = exports.BookTicketHeader = exports.BookTicketContainer = void 0;

var _styledBreakpoints = require("styled-breakpoints");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject19() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin: 2px;\n\n  width: 35px;\n  height: 35px;\n\n  text-align: center;\n  font-size: 18px;\n  color: white;\n  line-height: 35px;\n\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(2.5px);\n  -webkit-backdrop-filter: blur(2.5px);\n  border: 1px solid rgba(209, 213, 219, 0.3);\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  margin-right: 80px;\n  & p {\n    margin: 0;\n    font-weight: ", ";\n  }\n  width: 100%;\n  ", " {\n    justify-content: middle !important;\n\n    margin: 10px 0 0 0;\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  width: 700px;\n  min-width: 550px;\n  padding-top: 30px;\n  text-align: center;\n  ", " {\n    min-width: 100% !important;\n    & span {\n      font-size: 12px;\n    }\n  }\n  ", " {\n    padding-top: 20px;\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  padding-top: 100px;\n  height: auto;\n  max-height: auto;\n  width: 100%;\n  min-width: 550px;\n\n  ", " {\n    padding-top: 70px;\n    min-width: 100% !important;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n\n  height: 200px;\n\n  width: 110%;\n\n  left: 50%;\n  transform: translateX(-50%);\n\n  border: solid 20px transparent;\n  border-color: rgba(247, 154, 154, 0.2) transparent transparent transparent;\n  border-radius: 100% 100% 0 0;\n  & p {\n    text-align: center;\n    margin-top: 10px;\n    letter-spacing: 8px;\n  }\n  ", " {\n    min-width: 100% !important;\n    padding: 0 10px;\n    & p {\n      font-size: 13px;\n    }\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n\n  height: 200px;\n  width: 110%;\n\n  left: 50%;\n  transform: translateX(-50%);\n\n  border: solid 5px transparent;\n  border-color: red transparent transparent transparent;\n  border-radius: 50% 50% 0 0;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  margin-top: 20px;\n  width: 700px;\n\n  ", " {\n    min-width: 100% !important;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  text-align: center;\n\n  color: white;\n  width: 100%;\n  height: 100%;\n  line-height: 34px;\n  margin: 0;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n  font-size: 1rem;\n  margin: 0 0 0 10px;\n\n  text-transform: uppercase;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.8rem;\n  margin: 0 0 0 10px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n\n  margin: 5px 10px;\n\n  width: 35px;\n  height: 35px;\n\n  text-align: center;\n  font-size: 12px;\n  color: white;\n  line-height: 32px;\n\n  border-radius: 5px;\n  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  background-color: rgba(255, 255, 255, 0.3);\n  border: 1px solid rgba(209, 213, 219, 0.3);\n\n  &:hover {\n    ", "\n  }\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n\n  ", " {\n    width: 30px;\n    height: 30px;\n  }\n  ", " {\n    width: 20px;\n    height: 20px;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  background: rgba(0, 0, 0, 0.1);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(4.5px);\n  -webkit-backdrop-filter: blur(4.5px);\n  color: white;\n  font-size: 1.1rem;\n\n  cursor: not-allowed;\n  &:hover {\n    background: rgba(0, 0, 0, 0.1);\n    box-shadow: none;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  background-color: rgb(247, 8, 8);\n  box-shadow: 0 0 5px rgb(247, 8, 8), 0 0 25px rgb(247, 8, 8),\n    0 0 50px rgb(247, 8, 8);\n  color: white;\n  ", " {\n    box-shadow: 0 0 5px rgb(247, 8, 8);\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  border-bottom-left-radius: 20px !important;\n  border-bottom-right-radius: 20px !important;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background-color: rgba(255, 136, 0);\n  box-shadow: 0 0 5px rgba(255, 136, 0), 0 0 25px rgba(255, 136, 0),\n    0 0 50px rgba(255, 136, 0), 0 0 100px rgba(255, 136, 0);\n  cursor: not-allowed;\n  color: white;\n  font-size: 1.1rem;\n  &:hover {\n    background-color: rgba(255, 136, 0);\n    box-shadow: 0 0 5px rgba(255, 136, 0), 0 0 25px rgba(255, 136, 0),\n      0 0 50px rgba(255, 136, 0), 0 0 100px rgba(255, 136, 0);\n  }\n  ", " {\n    box-shadow: 0 0 5px rgba(255, 136, 0);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  margin-left: 10px;\n  width: 50px;\n  height: 50px;\n\n  border-radius: 5px;\n  filter: drop-shadow(0 0 3px ", ");\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  ", " {\n    flex-direction: column;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  width: 70%;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n  ", " {\n    width: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BookTicketContainer = _styledComponents["default"].div(_templateObject(), (0, _styledBreakpoints.down)("sm"));

exports.BookTicketContainer = BookTicketContainer;

var BookTicketHeader = _styledComponents["default"].div(_templateObject2(), (0, _styledBreakpoints.down)("md"));

exports.BookTicketHeader = BookTicketHeader;

var BookTicketCinemaImg = _styledComponents["default"].img(_templateObject3(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.secondary;
});

exports.BookTicketCinemaImg = BookTicketCinemaImg;
var seatIsBookedUser = (0, _styledComponents.css)(_templateObject4(), (0, _styledBreakpoints.between)("xs", "sm"));
var seatVip = (0, _styledComponents.css)(_templateObject5());
var seatIsBooking = (0, _styledComponents.css)(_templateObject6(), (0, _styledBreakpoints.between)("xs", "sm"));
var seatIsBooked = (0, _styledComponents.css)(_templateObject7());

var Seats = _styledComponents["default"].button(_templateObject8(), seatIsBooking, function (props) {
  return props.seatIsBookedUser ? "".concat(seatIsBookedUser) : null;
}, function (props) {
  return props.seatIsVip ? "".concat(seatVip) : null;
}, function (props) {
  return props.seatIsBooking ? "".concat(seatIsBooking) : null;
}, function (props) {
  return props.seatIsBooked ? "".concat(seatIsBooked) : null;
}, (0, _styledBreakpoints.down)("sm"), (0, _styledBreakpoints.down)("xs"));

exports.Seats = Seats;

var BookTicketAddress = _styledComponents["default"].h4(_templateObject9());

exports.BookTicketAddress = BookTicketAddress;

var BookTicketName = _styledComponents["default"].h5(_templateObject10());

exports.BookTicketName = BookTicketName;

var BookTiketAlphabetText = _styledComponents["default"].p(_templateObject11());

exports.BookTiketAlphabetText = BookTiketAlphabetText;

var BookTicketScreen = _styledComponents["default"].div(_templateObject12(), (0, _styledBreakpoints.down)("sm"));

exports.BookTicketScreen = BookTicketScreen;

var BookTicketBorderScreen = _styledComponents["default"].div(_templateObject13());

exports.BookTicketBorderScreen = BookTicketBorderScreen;

var BookTicketBackgroundScreen = _styledComponents["default"].div(_templateObject14(), (0, _styledBreakpoints.down)("sm"));

exports.BookTicketBackgroundScreen = BookTicketBackgroundScreen;

var BookTicketContainerSeats = _styledComponents["default"].div(_templateObject15(), (0, _styledBreakpoints.down)("sm"));

exports.BookTicketContainerSeats = BookTicketContainerSeats;

var BookTicketDescribleSeats = _styledComponents["default"].div(_templateObject16(), (0, _styledBreakpoints.down)("sm"), (0, _styledBreakpoints.down)("xs"));

exports.BookTicketDescribleSeats = BookTicketDescribleSeats;

var BookTicketCountDown = _styledComponents["default"].div(_templateObject17(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontWeight.bold;
}, (0, _styledBreakpoints.down)("sm"));

exports.BookTicketCountDown = BookTicketCountDown;

var BookTicketCountDownMin = _styledComponents["default"].span(_templateObject18());

exports.BookTicketCountDownMin = BookTicketCountDownMin;
var BookTicketCountDownSec = (0, _styledComponents["default"])(BookTicketCountDownMin)(_templateObject19());
exports.BookTicketCountDownSec = BookTicketCountDownSec;