import { Col, Row } from "antd";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { history } from "../../../App";
import { SweetAlertQuestion } from "../../../components/_core/models/SweetAlert";
import { PUBLIC_URL } from "../../../utils/setting";
import * as S from "./BookTicketElements";
import Seats from "./Seats";
export default function BookTicket(props) {
  const { thongTinPhim, danhSachGhe, userLogin, arrSeatIsBooking, scheduleId } =
    props;
  const CinemaBranchImage = thongTinPhim?.tenCumRap
    ?.split("-")[0]
    .trim()
    .replace(/\s+/g, "");
  let listAlphabet = "A,B,C,D,E,F,G";
  const [count, setCount] = useState(5 * 60);
  let intervalRef = useRef();
  console.log(count);

  const renderRowSeats = () => {
    return listAlphabet.split(",").map((char, index) => {
      return (
        <Row key={index} justify="center" align="middle">
          <Col span={2}>
            <S.BookTiketAlphabetText>{char}</S.BookTiketAlphabetText>
          </Col>
          <Seats
            indexRow={index}
            char={char}
            danhSachGhe={danhSachGhe}
            userLogin={userLogin}
            arrSeatIsBooking={arrSeatIsBooking}
            scheduleId={scheduleId}
          />
          <Col span={2}>
            <S.BookTiketAlphabetText>{char}</S.BookTiketAlphabetText>
          </Col>
        </Row>
      );
    });
  };
  useEffect(() => {
    intervalRef.current = setInterval((prev) => {
      if (count > 0) {
        setCount((prev) => prev - 1);
      }

      if (count === 0) {
        const alert = new SweetAlertQuestion();
        alert.title = "Time's Up";
        alert.text = "Do you want to book again?";
        alert.showConfirmButton = true;
        alert.showCancelButton = true;
        alert.text = "Do You want to book again?";
        alert.timer = "";
        Swal.fire({ ...alert }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          } else {
            history.push("/");
          }
        });
        clearInterval(intervalRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  });

  return (
    <S.BookTicketContainer>
      <S.BookTicketHeader>
        <Row>
          <Col>
            <S.BookTicketCinemaImg
              src={PUBLIC_URL + `/img/Cinema/${CinemaBranchImage}.jpg`}
              alt="cinema"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://picsum.photos/300/300";
              }}
            />
          </Col>
          <Col>
            <S.BookTicketName>
              {thongTinPhim?.tenCumRap} - {thongTinPhim?.tenRap}
            </S.BookTicketName>
            <S.BookTicketAddress>{thongTinPhim?.diaChi}</S.BookTicketAddress>
          </Col>
        </Row>
        <Col>
          <S.BookTicketCountDown>
            <p>HOLD TIME</p>
            <Row>
              <S.BookTicketCountDownMin>
                {Math.floor(count / 60)}
              </S.BookTicketCountDownMin>
              <S.BookTicketCountDownSec>
                {String(count % 60).padStart(2, "0")}
              </S.BookTicketCountDownSec>
            </Row>
          </S.BookTicketCountDown>
        </Col>
      </S.BookTicketHeader>

      <Row justify="center">
        <Col span={24}>
          <Row justify="center">
            <S.BookTicketScreen>
              <S.BookTicketBorderScreen />
              <S.BookTicketBackgroundScreen>
                <p>SCREEN</p>
              </S.BookTicketBackgroundScreen>
              <S.BookTicketContainerSeats>
                {renderRowSeats()}
              </S.BookTicketContainerSeats>
            </S.BookTicketScreen>
            <S.BookTicketDescribleSeats>
              <Row justify="center">
                <Col span={24}>
                  <Row justify="center">
                    <Col span={4}>
                      <Row justify="center">
                        <S.Seats disabled />
                      </Row>
                      <Row justify="center">
                        <span>Available</span>
                      </Row>
                    </Col>
                    <Col span={4}>
                      <Row justify="center">
                        <S.Seats disabled seatIsBooked={true}></S.Seats>
                      </Row>
                      <Row justify="center">
                        <span>Guest Booked</span>
                      </Row>
                    </Col>
                    <Col span={4}>
                      <Row justify="center">
                        <S.Seats
                          disabled
                          seatIsBookedUser={true}
                          models
                        ></S.Seats>
                      </Row>
                      <Row justify="center">
                        <span>Booked</span>
                      </Row>
                    </Col>
                    <Col span={4}>
                      <Row justify="center">
                        <S.Seats disabled seatIsBooking={true}></S.Seats>
                      </Row>
                      <Row justify="center">
                        <span>Selected</span>
                      </Row>
                    </Col>

                    <Col span={4}>
                      <Row justify="center">
                        <S.Seats disabled></S.Seats>
                      </Row>
                      <Row justify="center">
                        <span>Regular</span>
                      </Row>
                    </Col>
                    <Col span={4}>
                      <Row justify="center">
                        <S.Seats disabled seatIsVip={true}></S.Seats>
                      </Row>
                      <Row justify="center">
                        <span>VIP</span>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </S.BookTicketDescribleSeats>
          </Row>
        </Col>
      </Row>
    </S.BookTicketContainer>
  );
}
