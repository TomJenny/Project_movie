import Swal from "sweetalert2";
import { history } from "../../App";
import {
  SweetAlertFailure,
  SweetAlertSuccessful,
} from "../../components/_core/models/SweetAlert";
import { manageFilmsService } from "../../services/ManageFilmsService";
import { GET_FILMS, SET_FILM_DETAIL } from "./types/FilmType";

const alertSuccess = new SweetAlertSuccessful();
const alertFailure = new SweetAlertFailure();

export const getAPIFilmAction = (filmName = "") => {
  return async (dispatch) => {
    try {
      let result = await manageFilmsService.getListFilms(filmName);

      const actions = {
        type: GET_FILMS,
        arrayFilm: result.data,
      };

      dispatch(actions);
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

export const postAPINewsFilmAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await manageFilmsService
        .addNewsFilm(formData)
        .catch((error) => {
          throw error;
        });
      Swal.fire({
        ...alertSuccess,
        didDestroy: () => {
          history.push("/admin/films");
          dispatch(getAPIFilmAction());
        },
      });
    } catch (errors) {
      alertFailure.title = "Add Failed";
      alertFailure.text = `${errors.response?.data}`;
      Swal.fire({ ...alertFailure });
    }
  };
};

export const postAPIUpdateFilmAction = (formData) => {
  return async (dispatch) => {
    try {
      await manageFilmsService.updateFilm(formData).catch((error) => {
        throw error;
      });
      Swal.fire({
        ...alertSuccess,
        didDestroy: () => {
          history.push("/admin/films");
          dispatch(getAPIFilmAction());
        },
      });
    } catch (errors) {
      alertFailure.title = "Update Failed";
      alertFailure.text = `${errors.response?.data}`;
      Swal.fire({ ...alertFailure });
    }
  };
};

export const getAPIFilmByIdAction = (FilmId) => {
  return async (dispatch) => {
    try {
      const result = await manageFilmsService.getFilmById(FilmId);

      dispatch({
        type: SET_FILM_DETAIL,
        filmDetail: result.data,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

export const deleteAPIFilm = (FilmId) => {
  return async (dispatch) => {
    try {
      await manageFilmsService.deleteFilm(FilmId).catch((error) => {
        throw error;
      });
      Swal.fire({
        ...alertSuccess,
        didDestroy: () => {
          history.push("/admin/films");
          dispatch(getAPIFilmAction());
        },
      });
    } catch (errors) {
      alertFailure.title = "Delete Failed";
      alertFailure.text = `${errors.response?.data}`;
      Swal.fire({
        ...alertFailure,
        didDestroy: () => {
          dispatch(getAPIFilmAction());
        },
      });
    }
  };
};
