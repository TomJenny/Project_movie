import { GROUPID } from "../utils/setting";
import { BaseService } from "./BaseService";

export class ManageUserService extends BaseService {
  constructor(...props) {
    super();
  }

  getUserInfoLogin = (userInfo) => {
    return this.post(`api/QuanLyNguoiDung/DangNhap`, userInfo);
  };

  postUserInfoRegister = (userInfo) => {
    return this.post(`api/QuanLyNguoiDung/DangKy`, userInfo);
  };

  getAccountInfo = (accountName) => {
    return this.post(`api/QuanLyNguoiDung/ThongTinTaiKhoan`, accountName);
  };

  getListUsers = (accountName) => {
    if (accountName) {
      return this.get(
        `api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}&tuKhoa=${accountName}`
      );
    }
    return this.get(
      `api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`
    );
  };

  getFindUsers = (word) => {
    return this.get(
      `api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUPID}&tuKhoa=${word}`
    );
  };
  deleteUser = (account) => {
    return this.delete(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${account}`);
  };
  putUpdateUser = (userUpdate) => {
    return this.put(`api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, userUpdate);
  };
  postAddUser = (NewUser) => {
    return this.post(`api/QuanLyNguoiDung/ThemNguoiDung`, NewUser);
  };
}

export const manageUserService = new ManageUserService();
