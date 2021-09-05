import { GET_FILMS, SET_FILM_DETAIL } from "../actions/types/FilmType";

const initialState = {
  arrayFilm: [],
  filmDetail: {},
};

export const FilmReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS: {
      state.arrayFilm = action.arrayFilm;
      return { ...state };
    }

    case SET_FILM_DETAIL: {
      state.filmDetail = action.filmDetail;
      return { ...state };
    }

    default:
      return state;
  }
};
