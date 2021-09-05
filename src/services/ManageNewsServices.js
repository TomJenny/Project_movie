import axios from "axios";
import { DOMAIN_SECONDARY } from "../utils/setting";
import { BaseService } from "./BaseService";

export class ManageNewsService extends BaseService {
  constructor(...props) {
    super();
  }

  getListNews = () => {
    const promise = axios({
      url: `${DOMAIN_SECONDARY}/news`,
      method: "get",
    });
    return promise;
  };
}

export const manageNewsService = new ManageNewsService();
