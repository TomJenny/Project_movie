"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentReducer = void 0;

var _CommentType = require("../actions/types/CommentType");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  arrayComment: [],
  arrayCommentById: [],
  isModalVisible: false
};

var CommentReducer = function CommentReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _CommentType.SET_LIST_COMMENTS:
      {
        state.arrayComment = action.arrayComment;
        return _objectSpread({}, state);
      }

    case _CommentType.SET_COMMENT_BY_ID:
      {
        state.arrayCommentById = action.arrayCommentById;
        return _objectSpread({}, state);
      }

    case _CommentType.SET_MODAL_VISIBLE:
      {
        state.isModalVisible = true;
        return _objectSpread({}, state);
      }

    case _CommentType.SET_MODAL_INVISIBLE:
      {
        state.isModalVisible = false;
        return _objectSpread({}, state);
      }

    default:
      return state;
  }
};

exports.CommentReducer = CommentReducer;