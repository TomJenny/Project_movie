"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarouselReducer = void 0;

var _setting = require("../../utils/setting");

var _CarouselType = require("../actions/types/CarouselType");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  arrFilm: [{
    maBanner: 1,
    maPhim: 1282,
    hinhAnh: "".concat(_setting.PUBLIC_URL, "/img/Carousel/latmat48h.jpg"),
    trailer: "https://www.youtube.com/embed/U3LcgxAefhM"
  }, {
    maBanner: 2,
    maPhim: 1283,
    hinhAnh: "".concat(_setting.PUBLIC_URL, "/img/Carousel/BanTayDietQuy.jpg"),
    trailer: "https://www.youtube.com/embed/9nyV-pgMX4I"
  }, {
    maBanner: 3,
    maPhim: 1284,
    hinhAnh: "".concat(_setting.PUBLIC_URL, "/img/Carousel/Mortal-Kombat-Cover.jpg"),
    trailer: "https://www.youtube.com/embed/NnjJiwYsT9c"
  }]
};

var CarouselReducer = function CarouselReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _CarouselType.GET_CAROUSEL:
      {
        return _objectSpread({}, state);
      }

    default:
      return state;
  }
};

exports.CarouselReducer = CarouselReducer;