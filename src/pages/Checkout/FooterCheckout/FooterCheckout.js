import { Col, Row } from "antd";
import _ from "lodash";
import React from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { bookTicketAction } from "../../../redux/actions/BoxOfficeAction";
import { DISPLAY_SIDEBAR } from "../../../redux/actions/types/BoxOfficeType";
import * as S from "./FooterCheckoutElement";
export default function FooterCheckout(props) {
  const { arrSeatIsBooking, scheduleId, userLogin, displaySidebar, tabActive } =
    props;
  const dispatch = useDispatch();
  const handleButtonBookTicket = () => {
    let bookingInfo = {
      maLichChieu: scheduleId,
      danhSachVe: arrSeatIsBooking,
      taiKhoanNguoiDung: userLogin.taiKhoan,
    };
    dispatch(bookTicketAction(bookingInfo));
    dispatch({
      type: DISPLAY_SIDEBAR,
      displaySidebar: false,
    });
  };
  const handleButtonPayment = () => {
    if (!_.isEmpty(arrSeatIsBooking)) {
      dispatch({
        type: DISPLAY_SIDEBAR,
        displaySidebar: true,
      });
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
    <S.CheckoutFooterContainer>
      <Row>
        <Col span={12}>
          <S.FooterCheckoutSeats>
            <FaUser /> {arrSeatIsBooking.length}
            <S.FooterCheckoutTotal>
              {arrSeatIsBooking
                .reduce((Total, seatIsBooking, index) => {
                  return (Total += seatIsBooking.giaVe);
                }, 0)
                .toLocaleString()}
              VNĐ
            </S.FooterCheckoutTotal>
          </S.FooterCheckoutSeats>
        </Col>
        <Col span={12}>
          {displaySidebar ? (
            <S.FooterCheckoutButton
              onClick={() => {
                handleButtonBookTicket();
              }}
            >
              <span style={{ color: "white" }}>BOOK</span>
            </S.FooterCheckoutButton>
          ) : (
            <S.FooterCheckoutButton
              onClick={() => {
                handleButtonPayment();
              }}
            >
              <span style={{ color: "white" }}>PAYMENT</span>
            </S.FooterCheckoutButton>
          )}
        </Col>
      </Row>
    </S.CheckoutFooterContainer>
  );
}
