import { BaseService } from "./BaseService";

export class ManageBoxOfficeService extends BaseService {
  constructor(...props) {
    super();
  }
  getListBoxOffices = (scheduleId) => {
    return this.get(
      `api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${scheduleId}`
    );
  };
  postBookTicket = (bookTicketInfo) => {
    return this.post(`api/QuanLyDatVe/DatVe`, bookTicketInfo);
  };
  postCreateSchedule = (ScheduleshowTime) => {
    return this.post(`/api/QuanLyDatVe/TaoLichChieu`, ScheduleshowTime);
  };
}
export const manageBoxOfficeService = new ManageBoxOfficeService();
