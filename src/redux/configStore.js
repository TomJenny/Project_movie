import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { BoxOfficeReducer } from "./reducers/BoxOfficeReducer";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { CinemaReducer } from "./reducers/CinemaReducer";
import { CommentReducer } from "./reducers/CommentReducer";
import { FilmReducer } from "./reducers/FilmReducer";
import { LoadingReducer } from "./reducers/LoadingReducer";
import { ModalVideoReducer } from "./reducers/ModalVideoReducer";
import { NewsReducer } from "./reducers/NewsReducer";
import { UserReducer } from "./reducers/UserReducer";

const rootReducer = combineReducers({
  FilmReducer,
  CarouselReducer,
  CinemaReducer,
  UserReducer,
  BoxOfficeReducer,
  NewsReducer,
  ModalVideoReducer,
  LoadingReducer,
  CommentReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
