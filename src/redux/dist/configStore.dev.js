"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _BoxOfficeReducer = require("./reducers/BoxOfficeReducer");

var _CarouselReducer = require("./reducers/CarouselReducer");

var _CinemaReducer = require("./reducers/CinemaReducer");

var _CommentReducer = require("./reducers/CommentReducer");

var _FilmReducer = require("./reducers/FilmReducer");

var _LoadingReducer = require("./reducers/LoadingReducer");

var _ModalVideoReducer = require("./reducers/ModalVideoReducer");

var _NewsReducer = require("./reducers/NewsReducer");

var _UserReducer = require("./reducers/UserReducer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = (0, _redux.combineReducers)({
  FilmReducer: _FilmReducer.FilmReducer,
  CarouselReducer: _CarouselReducer.CarouselReducer,
  CinemaReducer: _CinemaReducer.CinemaReducer,
  UserReducer: _UserReducer.UserReducer,
  BoxOfficeReducer: _BoxOfficeReducer.BoxOfficeReducer,
  NewsReducer: _NewsReducer.NewsReducer,
  ModalVideoReducer: _ModalVideoReducer.ModalVideoReducer,
  LoadingReducer: _LoadingReducer.LoadingReducer,
  CommentReducer: _CommentReducer.CommentReducer
});
var store = (0, _redux.createStore)(rootReducer, (0, _redux.applyMiddleware)(_reduxThunk["default"]));
exports.store = store;