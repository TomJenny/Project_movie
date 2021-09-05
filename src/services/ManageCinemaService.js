import { GROUPID } from "../utils/setting";
import { BaseService } from "./BaseService";

export class ManageCinemaService extends BaseService {
  constructor(...props) {
    super();
  }

  getListCinemas = () => {
    return this.get(`api/QuanLyRap/LayThongTinHeThongRap`);
  };

  getListCinemaBranches = (cinema) => {
    return this.get(
      `/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${cinema}`
    );
  };

  getListCinemaShowTimes = (cinema = "") => {
    if (cinema.trim() !== "") {
      return this.get(
        `api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${cinema}&maNhom=${GROUPID}`
      );
    }
    return this.get(
      `api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`
    );
  };

  getFilmShowTimes = (filmID) => {
    return this.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${filmID}`);
  };
}

export const manageCinemaService = new ManageCinemaService();
