import axios from "axios";
import { ACCESSTOKEN, DOMAIN } from "../utils/setting";

export class BaseService {
  constructor(props) {}

  get = (url) => {
    let promise = axios({
      url: `${DOMAIN}/${url}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(ACCESSTOKEN)}`,
      },
    });
    return promise;
  };

  post = (url, model) => {
    let promise = axios({
      url: `${DOMAIN}/${url}`,
      method: "POST",
      data: model,
      headers: {
        Authorization: `Bearer ${localStorage.getItem(ACCESSTOKEN)}`,
      },
    });
    return promise;
  };

  put = (url, model) => {
    let promise = axios({
      url: `${DOMAIN}/${url}`,
      method: "PUT",
      data: model,
      headers: {
        Authorization: `Bearer ${localStorage.getItem(ACCESSTOKEN)}`,
      },
    });
    return promise;
  };

  delete = (url) => {
    let promise = axios({
      url: `${DOMAIN}/${url}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(ACCESSTOKEN)}`,
      },
    });
    return promise;
  };
}
