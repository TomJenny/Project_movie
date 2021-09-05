import { GROUPID } from "../utils/setting";
import { BaseService } from "./BaseService";

export class ManageFilmsService extends BaseService {
  constructor(...props) {
    super();
  }

  getListFilms = (filmName = "") => {
    if (filmName.trim() !== "") {
      return this.get(
        `api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}&tenPhim=${filmName}`
      );
    }
    return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
  };
  addNewsFilm = (formData) => {
    return this.post(`api/QuanLyPhim/ThemPhimUploadHinh`, formData);
  };

  getFilmById = (filmId) => {
    return this.get(`api/QuanLyPhim/LayThongTinPhim?MaPhim=${filmId}`);
  };

  updateFilm = (formData) => {
    return this.post(`api/QuanLyPhim/CapNhatPhimUpload`, formData);
  };

  deleteFilm = (filmId) => {
    return this.delete(`api/QuanLyPhim/XoaPhim?MaPhim=${filmId}`);
  };
}
export const manageFilmsService = new ManageFilmsService();
