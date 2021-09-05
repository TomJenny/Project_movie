import { Col, Row } from "antd";
import _ from "lodash";
import moment from "moment";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccountInfo } from "../../redux/actions/UserAction";
import SpinLoading from "../Loading/Spin/Spin";
import {
  HistoryCard,
  HistoryCardBody,
  HistoryContainer,
  HistoryHeader,
  HistoryImage,
  HistoryLoadingTitle,
  HistoryTitle,
} from "./HistoryElement";
export default function History(props) {
  const { tabActive } = props;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { accountInfo, userLogin } = useSelector((state) => state.UserReducer);

  const thongTinDatVe = _.orderBy(
    accountInfo?.thongTinDatVe,
    function (item) {
      return new moment(item.ngayDat);
    },
    ["desc"]
  );

  const renderHistoryBookTicket = () => {
    return thongTinDatVe.map((ticket, index) => {
      const seats = _.first(ticket.danhSachGhe);

      return (
        <Col key={index} lg={{ span: 7 }} md={{ span: 12 }} span={24}>
          <HistoryCard>
            <Row>
              <Col span={7}>
                <HistoryImage src={"https://picsum.photos/300/300"} />
              </Col>
              <Col span={17}>
                <HistoryCardBody>
                  <HistoryHeader>{ticket.tenPhim}</HistoryHeader>
                  <p>
                    <HistoryTitle>Show time: </HistoryTitle>
                    {moment(ticket.ngayDat).format("hh:mm A")}
                    <HistoryTitle> - Date: </HistoryTitle>
                    {moment(ticket.ngayDat).format("DD-MM-YYYY")} .
                  </p>
                  <p>
                    <HistoryTitle className="font-bold">Location:</HistoryTitle>
                    {seats.tenHeThongRap}
                  </p>
                  <p>
                    <HistoryTitle>Theater Name:</HistoryTitle> {seats.tenCumRap}
                  </p>
                  <p>
                    <HistoryTitle>Seats:</HistoryTitle>
                    {ticket.danhSachGhe.map((seat, index) => {
                      return <span key={index}> [ {seat.tenGhe} ] </span>;
                    })}
                  </p>
                </HistoryCardBody>
              </Col>
            </Row>
          </HistoryCard>
        </Col>
      );
    });
  };
  useEffect(() => {
    (async () => {
      let action = {
        taiKhoan: userLogin?.taiKhoan,
      };

      await dispatch(getAccountInfo(action));

      await setLoading(false);
    })();
  }, [tabActive]);

  return (
    <HistoryContainer>
      {loading ? (
        <Fragment>
          <HistoryLoadingTitle>ENJOY YOUR MOVIE</HistoryLoadingTitle>
          <SpinLoading />
        </Fragment>
      ) : (
        <Row gutter={[16, 16]} justify="center">
          {renderHistoryBookTicket()}
        </Row>
      )}
    </HistoryContainer>
  );
}
