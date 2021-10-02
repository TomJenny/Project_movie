import { manageCommentServices } from "../../services/ManageCommentServices";
import { SET_COMMENT_BY_ID, SET_LIST_COMMENTS } from "./types/CommentType";

export const getAPICommentsAction = () => {
  return async (dispatch) => {
    try {
      let result = await manageCommentServices.getListComment();
      const action = {
        type: SET_LIST_COMMENTS,
        arrayComment: result.data,
      };
      dispatch(action);
    } catch (error) {}
  };
};
export const getAPICommentsByIdAction = (id) => {
  return async (dispatch) => {
    try {
      let result = await manageCommentServices.getCommentById(id);
      const action = {
        type: SET_COMMENT_BY_ID,
        arrayCommentById: result.data,
      };
      dispatch(action);
    } catch (error) {}
  };
};
export const postAPIAddCommentAction = (commentObj) => {
  return async (dispatch) => {
    try {
      await manageCommentServices.postComment(commentObj);
      await dispatch(getAPICommentsByIdAction(commentObj.generalId));
    } catch (error) {}
  };
};
