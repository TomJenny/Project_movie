import { manageNewsService } from "../../services/ManageNewsServices";
import { SET_LIST_NEWS } from "./types/NewsType";

export const getAPINewsAction = () => {
  return async (dispatch) => {
    try {
      let result = await manageNewsService.getListNews();
      const action = {
        type: SET_LIST_NEWS,
        arrayInfo: result.data,
      };
      dispatch(action);
    } catch (error) {}
  };
};
