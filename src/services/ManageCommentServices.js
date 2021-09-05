import axios from "axios";
import { DOMAIN_SECONDARY } from "../utils/setting";
import { BaseService } from "./BaseService";

export class ManageCommentServices extends BaseService {
  constructor(...props) {
    super();
  }

  getListComment = () => {
    const promise = axios({
      url: `${DOMAIN_SECONDARY}/comment`,
      method: "get",
    });
    return promise;
  };

  getCommentById = (id) => {
    const promise = axios({
      url: `${DOMAIN_SECONDARY}/comment?generalId=${id}&sortBy=createdAt&order=desc`,
      method: "get",
    });
    return promise;
  };

  postComment = (comment) => {
    const promise = axios({
      url: `${DOMAIN_SECONDARY}/comment`,
      method: "post",
      data: comment,
    });
    return promise;
  };
}

export const manageCommentServices = new ManageCommentServices();
