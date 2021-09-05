"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxOfficeReducer = void 0;

var _BoxOfficeType = require("../actions/types/BoxOfficeType");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  arrListBoxOffices: [],
  arrSeatIsBooking: [],
  tabActive: "1",
  displaySidebar: false
};

var BoxOfficeReducer = function BoxOfficeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _BoxOfficeType.SET_LIST_BOX_OFFICE:
      {
        state.arrListBoxOffices = action.arrListBoxOffices;
        return _objectSpread({}, state);
      }

    case _BoxOfficeType.SET_BOOKING_SEATS_USER:
      {
        var arrSeatIsBookingUpdate = _toConsumableArray(state.arrSeatIsBooking);

        var index = arrSeatIsBookingUpdate.findIndex(function (seat, index) {
          return action.seat.maGhe === seat.maGhe;
        });

        if (index !== -1) {
          arrSeatIsBookingUpdate.splice(index, 1);
        } else {
          arrSeatIsBookingUpdate.push(action.seat);
        }

        state.arrSeatIsBooking = arrSeatIsBookingUpdate;
        return _objectSpread({}, state);
      }

    case _BoxOfficeType.DELETE_LIST_SEAT_BOOKING:
      {
        state.arrSeatIsBooking = [];
        return _objectSpread({}, state);
      }

    case _BoxOfficeType.CHANGE_TAB_ACTIVE:
      {
        state.tabActive = action.tabActive;
        return _objectSpread({}, state);
      }

    case _BoxOfficeType.DISPLAY_SIDEBAR:
      {
        state.displaySidebar = action.displaySidebar;
        return _objectSpread({}, state);
      }

    default:
      return state;
  }
};

exports.BoxOfficeReducer = BoxOfficeReducer;