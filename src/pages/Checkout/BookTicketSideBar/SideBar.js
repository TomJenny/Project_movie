import {
  CreditCardOutlined,
  MailOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import { Col, Radio, Row, Space } from "antd";
import _ from "lodash";
import React, { useState } from "react";
import { BsCalendar } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { IoTicketOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { bookTicketAction } from "../../../redux/actions/BoxOfficeAction";
import { PUBLIC_URL } from "../../../utils/setting";
import * as S from "./SidebarElements";

export default function BookTicketSideBar(props) {
  const { displaySidebar, tabActive } = props;
  const dispatch = useDispatch();
  const [valuePayment, setValuePayment] = useState(1);

  const { thongTinPhim, userLogin, arrSeatIsBooking, scheduleId } = props;

  const handleButtonBookTicket = () => {
    if (!_.isEmpty(arrSeatIsBooking)) {
      let bookingInfo = {
        maLichChieu: scheduleId,
        danhSachVe: arrSeatIsBooking,
        taiKhoanNguoiDung: userLogin.taiKhoan,
      };
      dispatch(bookTicketAction(bookingInfo));
    } else {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Please Choose Your Seats",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  return (
    <S.SideBarContainer displaySidebar={displaySidebar} tabActive={tabActive}>
      <S.SideBarContentOverlay>
        <S.SideBarImg
          src={thongTinPhim?.hinhAnh}
          onerror="https://picsum.photos/300/300"
        />
        <Col span={18} push={3}>
          <S.SideBarTitle>{thongTinPhim?.tenPhim}</S.SideBarTitle>
          <S.SideBarTitle2>
            <ImLocation /> <span></span>Location: {thongTinPhim?.tenCumRap} -{" "}
            {thongTinPhim?.tenRap}
          </S.SideBarTitle2>
          <S.SideBarTitle2>
            <BsCalendar /> Show time: {thongTinPhim?.ngayChieu} -{" "}
            {thongTinPhim?.gioChieu}
          </S.SideBarTitle2>

          <Row justify="end">
            <S.SideBarTitleTotalPrice>
              {arrSeatIsBooking
                .reduce((Total, seatIsBooking, index) => {
                  return (Total += seatIsBooking.giaVe);
                }, 0)
                .toLocaleString()}
              VNĐ
            </S.SideBarTitleTotalPrice>
          </Row>
          <S.SidebarDivide />
          <S.SideBarContent>
            <Row justify="space-between">
              <p>
                <MailOutlined /> EMAIL
              </p>
              <p>{userLogin.email}</p>
            </Row>
            <S.SidebarDivide />
            <Row justify="space-between">
              <p>
                <MobileOutlined /> PHONE
              </p>
              <p>{userLogin.soDT}</p>
            </Row>
            <S.SidebarDivide />
            <span>
              <IoTicketOutline /> SEATS
            </span>
            <Row justify="end">
              {_.sortBy(arrSeatIsBooking, ["maGhe"]).map(
                (seatIsBooking, index) => {
                  return (
                    <S.SidebarSeats key={index}>
                      {seatIsBooking.line}
                      {seatIsBooking.stt}
                    </S.SidebarSeats>
                  );
                }
              )}
            </Row>
            <S.SidebarDivide />
            <S.SidebarPayment>
              <p>
                <CreditCardOutlined /> PAYMENT OPTIONS
              </p>

              <Radio.Group
                onChange={(e) => {
                  setValuePayment(e.target.value);
                }}
                value={valuePayment}
                buttonStyle="solid"
              >
                <Space direction="vertical">
                  <Radio value={1}>
                    <S.SidebarPaymentImg
                      src={PUBLIC_URL + "/img/IconPartner/doitac (18).png"}
                      alt="payment"
                    />
                    <S.SidebarPaymentImg
                      src={PUBLIC_URL + "/img/IconPartner/doitac (15).png"}
                      alt="payment"
                    />
                    <S.SidebarPaymentImg
                      src={PUBLIC_URL + "/img/IconPartner/doitac (16).png"}
                      alt="payment"
                    />
                    <S.SidebarPaymentImg
                      src={PUBLIC_URL + "/img/IconPartner/doitac (10).png"}
                      alt="payment"
                    />
                  </Radio>
                  <Radio value={2}>
                    {" "}
                    <S.SidebarPaymentImg
                      src={PUBLIC_URL + "/img/IconPartner/doitac (1).png"}
                      alt="payment"
                    />
                    <S.SidebarPaymentImg
                      src={PUBLIC_URL + "/img/IconPartner/doitac (19).png"}
                      alt="payment"
                    />
                  </Radio>
                  <Radio value={3}>
                    <p style={{ marginLeft: "15px" }}>CASH</p>
                  </Radio>
                </Space>
              </Radio.Group>
            </S.SidebarPayment>
          </S.SideBarContent>
        </Col>
      </S.SideBarContentOverlay>
      <Row justify="center">
        <S.ButtonOverlay
          type="primary"
          danger
          onClick={handleButtonBookTicket}
          displaysidebar={displaySidebar.toString()}
        >
          BOOK NOW
        </S.ButtonOverlay>
      </Row>
    </S.SideBarContainer>
  );
}
