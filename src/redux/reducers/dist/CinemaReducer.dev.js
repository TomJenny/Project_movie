"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CinemaReducer = void 0;

var _CinemaType = require("../actions/types/CinemaType");

var _moment = _interopRequireDefault(require("moment"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  arrayCinemaShowTimes: [],
  filmShowTimes: {},
  cinemaBranch: {},
  listCinemaBranch: [],
  dateShowTimes: [],
  showTimes: []
};

var CinemaReducer = function CinemaReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _CinemaType.GET_LIST_CINEMA_SHOW_TIMES:
      {
        state.arrayCinemaShowTimes = action.arrayCinemaShowTimes;
        return _objectSpread({}, state);
      }

    case _CinemaType.GET_FILM_SHOW_TIMES:
      {
        state.filmShowTimes = action.filmShowTimes;
        return _objectSpread({}, state);
      }

    case _CinemaType.GET_CINEMA_BRANCH:
      {
        state.cinemaBranch = state.arrayCinemaShowTimes[0].lstCumRap.filter(function (cinemaBranch, index) {
          return cinemaBranch.maCumRap === action.cinemaBranchID;
        })[0];
        return _objectSpread({}, state);
      }

    case _CinemaType.GET_CINEMA_BRANCH_BY_FILM:
      {
        state.listCinemaBranch = [];
        state.filmShowTimes.heThongRapChieu.forEach(function (cinema, index) {
          return cinema.cumRapChieu.forEach(function (cinemaBranch) {
            return state.listCinemaBranch.push(cinemaBranch);
          });
        });
        return _objectSpread({}, state);
      }

    case _CinemaType.GET_DATE_BY_CINEMA_BRANCH:
      {
        state.dateShowTimes = state.listCinemaBranch.filter(function (filmShowTimes, index) {
          return filmShowTimes.maCumRap === action.cinemaBranch;
        })[0].lichChieuPhim;
        state.dateShowTimes = state.dateShowTimes.map(function (dateShowTime, index) {
          var date = (0, _moment["default"])(dateShowTime.ngayChieuGioChieu).format("YYYY-MM-DD");
          var time = dateShowTime.ngayChieuGioChieu;
          dateShowTime.ngayChieuGioChieu = date.toString();
          return _objectSpread({}, dateShowTime, {
            time: time
          });
        });
        state.dateShowTimes = _lodash["default"].chain(state.dateShowTimes).groupBy(function (x) {
          return x.ngayChieuGioChieu;
        }).map(function (value, key) {
          return {
            date: key,
            showTime: value
          };
        }).value();
        return _objectSpread({}, state);
      }

    case _CinemaType.GET_TIME_BY_DATE:
      {
        state.showTimes = state.dateShowTimes.filter(function (showTimes, index) {
          return showTimes.date === action.date;
        });
        state.showTimes = state.showTimes[0].showTime;
        return _objectSpread({}, state);
      }

    default:
      return state;
  }
};

exports.CinemaReducer = CinemaReducer;