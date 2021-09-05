import { Col } from "antd";
import React, { Fragment } from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useBreakpoints } from "../../../components/Styles/ResponsiveBreakpoints";
import { SET_BOOKING_SEATS_USER } from "../../../redux/actions/types/BoxOfficeType";
import * as S from "./BookTicketElements";

export default function Seats(props) {
  const responsive = useBreakpoints();
  const { danhSachGhe, indexRow, char, arrSeatIsBooking, userLogin } = props;
  const dispatch = useDispatch();
  const beginLine = (indexRow + 1) * 10 - 10;
  const endLine = (indexRow + 1) * 10;
  return (
    <Fragment>
      {danhSachGhe?.slice(beginLine, endLine).map((seat, index) => {
        let statusSeats = {
          seatIsBookedUser: false,
          seatIsBooked: false,
          seatIsVip: false,
          seatIsBooking: false,
        };
        // Check seats are kind of VIP
        statusSeats.seatIsVip = seat.loaiGhe === "Vip" ? true : false;

        // Check status's seats are booked by user
        if (seat.taiKhoanNguoiDat === userLogin.taiKhoan) {
          statusSeats.seatIsBookedUser = true;
        } else {
          statusSeats.seatIsBooked = seat.daDat;
        }

        // Check status's seats are booking by user or by guest
        let indexBooking = arrSeatIsBooking?.findIndex(
          (seatIsBooking, index) => seatIsBooking.maGhe === seat.maGhe
        );
        if (indexBooking !== -1) {
          statusSeats.seatIsBooking = true;
        }

        return (
          <Col key={index} span={2}>
            <S.Seats
              disabled={seat.daDat}
              onClick={() => {
                const action = {
                  type: SET_BOOKING_SEATS_USER,
                  seat: { ...seat, line: char },
                };
                dispatch(action);
              }}
              {...statusSeats}
            >
              {responsive.isSm ? null : statusSeats.seatIsBooked ||
                statusSeats.seatIsBookedUser ? (
                <FaUser />
              ) : (
                `${char}${seat.tenGhe} `
              )}
            </S.Seats>
          </Col>
        );
      })}
    </Fragment>
  );
}
