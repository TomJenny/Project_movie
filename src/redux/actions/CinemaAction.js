import { manageCinemaService } from "../../services/ManageCinemaService";
import {
  GET_FILM_SHOW_TIMES,
  GET_LIST_CINEMA_SHOW_TIMES,
} from "./types/CinemaType";

export const getAPIListCinemaShowTimeAction = (cinema = "") => {
  return async (dispatch) => {
    try {
      let result = await manageCinemaService.getListCinemaShowTimes(cinema);
      const actions = {
        type: GET_LIST_CINEMA_SHOW_TIMES,
        arrayCinemaShowTimes: result.data,
      };

      dispatch(actions);
    } catch (error) {}
  };
};
export const getAPIFilmShowTimesAction = (filmID) => {
  return async (dispatch) => {
    try {
      let result = await manageCinemaService.getFilmShowTimes(filmID);
      const actions = {
        type: GET_FILM_SHOW_TIMES,
        filmShowTimes: result.data,
      };

      dispatch(actions);
    } catch (error) {}
  };
};
