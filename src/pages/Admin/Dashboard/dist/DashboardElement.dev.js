"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashboardHeaderChart = exports.DashBoardChartContainer = exports.DashboardStatus = exports.DashboardProgress = exports.DashboardDivider = exports.DashBoardIcon = exports.DashBoardContent = exports.DashBoardTitle = exports.DashBoardInfoMovie = exports.DashBoardInfoTicket = exports.DashBoardInfoAccount = exports.DashBoardInfoRevenue = exports.DashboardContainer = void 0;

var _antd = require("antd");

var _macro = _interopRequireWildcard(require("styled-components/macro"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: -20px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 90%;\n  border-radius: 5px;\n\n  background: red;\n\n  color: ", ";\n  padding: 10px;\n  font-size: 20px;\n  font-weight: ", ";\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n      padding: 35px 20px 10px;\n    "]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  padding-top: 40px;\n  margin-top: 50px;\n  width: 100%;\n  height: 430px;\n  border-radius: 10px;\n  background: ", ";\n\n  ", "\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  font-weight: ", ";\n  text-align: left;\n  font-size: 0.8rem;\n  color: ", ";\n\n  & span {\n    & svg {\n      color: ", ";\n    }\n    font-size: 0.9rem;\n\n    color: ", ";\n  }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n        background: linear-gradient(60deg, #029eb1, #25b1c3);\n      "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n        background: linear-gradient(60deg, red, #da3a36);\n      "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n        background: linear-gradient(60deg, #288c6c, #4ea752);\n      "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n        background: linear-gradient(60deg, #f5700c, #ff9800);\n      "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  & .ant-progress-text {\n    color: ", ";\n  }\n\n  &&& .ant-progress-bg {\n    height: 10px !important;\n    ", "\n    ", "\n    ", "\n    ", "\n  }\n  & .ant-progress-inner {\n    background-color: transparent;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  margin: 6px 0;\n  height: 2px;\n\n  border: none;\n  background: ", ";\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n      background: linear-gradient(60deg, #029eb1, #25b1c3);\n    "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n      background: linear-gradient(60deg, red, #da3a36);\n    "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n      background: linear-gradient(60deg, #288c6c, #4ea752);\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n      background: linear-gradient(60deg, #f5700c, #ff9800);\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: -24px;\n  left: 20px;\n  width: 80px;\n  height: 80px;\n\n  border-radius: 5px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-weight: ", ";\n  font-size: 45px;\n  ", "\n  ", "\n    ", "\n    ", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  font-weight: ", ";\n  margin: 0;\n\n  color: ", "!important;\n  font-size: 25px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-weight: ", ";\n  color: ", "!important;\n\n  text-align: right;\n  font-size: 22px;\n  margin: 0;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: linear-gradient(\n    30deg,\n    ", " 50%,\n    ", " 50%\n  );\n  position: relative;\n  width: 100%;\n  height: 160px;\n  border-radius: 5px;\n  text-align: right;\n  padding: 20px 10px 0;\n"]);

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

var DashboardContainer = _macro["default"].div(_templateObject());

exports.DashboardContainer = DashboardContainer;
var dashBoardInfoCss = (0, _macro.css)(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.black1;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.black3;
});

var DashBoardInfoRevenue = _macro["default"].div(_templateObject3(), dashBoardInfoCss);

exports.DashBoardInfoRevenue = DashBoardInfoRevenue;

var DashBoardInfoAccount = _macro["default"].div(_templateObject4(), dashBoardInfoCss);

exports.DashBoardInfoAccount = DashBoardInfoAccount;

var DashBoardInfoTicket = _macro["default"].div(_templateObject5(), dashBoardInfoCss);

exports.DashBoardInfoTicket = DashBoardInfoTicket;

var DashBoardInfoMovie = _macro["default"].div(_templateObject6(), dashBoardInfoCss);

exports.DashBoardInfoMovie = DashBoardInfoMovie;

var DashBoardTitle = _macro["default"].h1(_templateObject7(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.fontWeight.light;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.white2;
});

exports.DashBoardTitle = DashBoardTitle;

var DashBoardContent = _macro["default"].p(_templateObject8(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.fontWeight.light;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.white;
});

exports.DashBoardContent = DashBoardContent;

var DashBoardIcon = _macro["default"].div(_templateObject9(), function (_ref7) {
  var theme = _ref7.theme;
  return theme.fontWeight.light;
}, function (props) {
  return props.revenue && (0, _macro.css)(_templateObject10());
}, function (props) {
  return props.ticket && (0, _macro.css)(_templateObject11());
}, function (props) {
  return props.movie && (0, _macro.css)(_templateObject12());
}, function (props) {
  return props.account && (0, _macro.css)(_templateObject13());
});

exports.DashBoardIcon = DashBoardIcon;

var DashboardDivider = _macro["default"].hr(_templateObject14(), function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.black2;
});

exports.DashboardDivider = DashboardDivider;
var DashboardProgress = (0, _macro["default"])(_antd.Progress)(_templateObject15(), function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.white2;
}, function (props) {
  return props.revenue && (0, _macro.css)(_templateObject16());
}, function (props) {
  return props.ticket && (0, _macro.css)(_templateObject17());
}, function (props) {
  return props.movie && (0, _macro.css)(_templateObject18());
}, function (props) {
  return props.account && (0, _macro.css)(_templateObject19());
});
exports.DashboardProgress = DashboardProgress;

var DashboardStatus = _macro["default"].p(_templateObject20(), function (_ref10) {
  var theme = _ref10.theme;
  return theme.fontWeight.light;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.colors.white2;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors.primary;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.colors.white1;
});

exports.DashboardStatus = DashboardStatus;

var DashBoardChartContainer = _macro["default"].div(_templateObject21(), function (_ref14) {
  var theme = _ref14.theme;
  return theme.colors.black1;
}, function (props) {
  return props.barchart && (0, _macro.css)(_templateObject22());
});

exports.DashBoardChartContainer = DashBoardChartContainer;

var DashboardHeaderChart = _macro["default"].h1(_templateObject23(), function (_ref15) {
  var theme = _ref15.theme;
  return theme.colors.white1;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.fontWeight.light;
});

exports.DashboardHeaderChart = DashboardHeaderChart;