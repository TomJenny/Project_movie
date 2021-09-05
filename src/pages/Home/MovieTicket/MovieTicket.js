import { Col, Form, Row, Select } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../../App";
import { ButtonPrimaryStyled } from "../../../components/Styles/Button";
import { getAPIFilmShowTimesAction } from "../../../redux/actions/CinemaAction";
import {
  GET_CINEMA_BRANCH_BY_FILM,
  GET_DATE_BY_CINEMA_BRANCH,
  GET_TIME_BY_DATE,
} from "../../../redux/actions/types/CinemaType";
import * as S from "./MovieTicketElement";
import settings from "./MovieTicketSetting";

const { Option } = Select;
export default function MovieTicket(props) {
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const [qRCode, setQRCode] = useState(window.location.href);

  const { arrayFilm } = useSelector((state) => state.FilmReducer);

  const { listCinemaBranch, dateShowTimes, showTimes } = useSelector(
    (state) => state.CinemaReducer
  );

  const renderFilm = () => {
    return arrayFilm?.map((movie, index) => {
      return (
        <Option key={index} value={movie.maPhim}>
          {movie.tenPhim}
        </Option>
      );
    });
  };

  const renderCinema = () => {
    return listCinemaBranch?.map((cinemaBranch, index) => {
      return (
        <Option key={index} value={cinemaBranch.maCumRap}>
          {cinemaBranch.tenCumRap}
        </Option>
      );
    });
  };

  const renderDate = () => {
    return dateShowTimes?.map((date, index) => {
      return (
        <Option key={index} value={date.date}>
          {moment(date.date).format("DD-MM-YYYY")}
        </Option>
      );
    });
  };

  const renderTime = () => {
    return showTimes?.map((date, index) => {
      return (
        <Option key={index} value={date.maLichChieu}>
          {moment(date.time).format("hh:mm") + " - " + date.tenRap}
        </Option>
      );
    });
  };

  const onFinish = (values) => {
    if (values.ScheduleId) {
      form.resetFields();
      history.push(`/checkout/${values.ScheduleId}`);
    }
  };

  const onValuesChange = (changedValues) => {
    if (changedValues.Film) {
      (async () => {
        form.resetFields(["Cinema", "Date", "ScheduleId"]);
        await dispatch(getAPIFilmShowTimesAction(changedValues.Film));
        const action = {
          type: GET_CINEMA_BRANCH_BY_FILM,
        };
        await dispatch(action);
      })();
    }
    if (changedValues.Cinema) {
      form.resetFields(["Date", "ScheduleId"]);
      const action = {
        type: GET_DATE_BY_CINEMA_BRANCH,
        cinemaBranch: changedValues.Cinema,
      };
      dispatch(action);
    }

    if (changedValues.Date) {
      form.resetFields(["ScheduleId"]);

      const action = {
        type: GET_TIME_BY_DATE,
        date: changedValues.Date,
      };
      dispatch(action);
    }
    if (changedValues.ScheduleId) {
      setQRCode(window.location.href + "checkout/" + changedValues.ScheduleId);
    }
  };

  return (
    <S.MovieTicketSlider {...settings}>
      <S.MovieTicketContainer>
        <S.MovieTicketBody>
          <Row justify="center">
            <Col span={16}>
              <S.MovieTicketLeft>
                <Form
                  form={form}
                  name="ticket"
                  onFinish={onFinish}
                  onValuesChange={onValuesChange}
                  justify="center"
                >
                  <Row>
                    <Col span={3} offset={1}>
                      <S.MovieTicketIconMdMovieFilter />
                    </Col>
                    <Col span={19}>
                      <S.MovieTicketFormItem name="Film">
                        <S.MovieTicketSelect
                          placeholder="Film"
                          dropdownAlign={{
                            offset: [20, 4],
                          }}
                          dropdownMatchSelectWidth={220}
                        >
                          {renderFilm()}
                        </S.MovieTicketSelect>
                      </S.MovieTicketFormItem>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={3} offset={2}>
                      <S.MovieTicketIconAiFillVideoCamera />
                    </Col>
                    <Col span={18}>
                      <S.MovieTicketFormItem name="Cinema">
                        <S.MovieTicketSelect
                          placeholder="Cinema"
                          dropdownAlign={{
                            offset: [20, 4],
                          }}
                          dropdownMatchSelectWidth={220}
                          notFoundContent={"Please Choose Film"}
                        >
                          {renderCinema()}
                        </S.MovieTicketSelect>
                      </S.MovieTicketFormItem>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={3} offset={1}>
                      <S.MovieTicketIconBsCalendarFill />
                    </Col>
                    <Col span={7}>
                      <S.MovieTicketFormItem name="Date">
                        <S.MovieTicketSelect
                          placeholder="Date"
                          dropdownAlign={{
                            offset: [10, 4],
                          }}
                          dropdownMatchSelectWidth={100}
                          notFoundContent={"Please Choose Theater"}
                        >
                          {renderDate()}
                        </S.MovieTicketSelect>
                      </S.MovieTicketFormItem>
                    </Col>
                    <Col span={3} offset={1}>
                      <S.MovieTicketIconIoTime />
                    </Col>
                    <Col span={8}>
                      <S.MovieTicketFormItem name="ScheduleId">
                        <S.MovieTicketSelect
                          placeholder="Time"
                          dropdownAlign={{
                            offset: [10, 6],
                          }}
                          dropdownMatchSelectWidth={100}
                          notFoundContent={"Please Choose Date"}
                        >
                          {renderTime()}
                        </S.MovieTicketSelect>
                      </S.MovieTicketFormItem>
                    </Col>
                  </Row>
                  <Row justify="center">
                    <S.MovieTicketFormItem>
                      <ButtonPrimaryStyled
                        type="primary"
                        htmlType="submit"
                        danger
                        book="true"
                      >
                        BOOK
                      </ButtonPrimaryStyled>
                    </S.MovieTicketFormItem>
                  </Row>
                </Form>
              </S.MovieTicketLeft>
            </Col>
            <Col span={7}>
              <S.MovieTicketRight justify="center">
                <S.MovieTicketQRCode
                  id="qrcode"
                  value={qRCode}
                  size={96}
                  level={"H"}
                  bgColor={"white"}
                  includeMargin={true}
                  fgColor={"black"}
                  renderAs={"svg"}
                />
              </S.MovieTicketRight>
            </Col>
          </Row>
        </S.MovieTicketBody>
      </S.MovieTicketContainer>
      <div>
        <S.MovieTicketYoutubePlayer url="https://www.youtube.com/embed/fEE4RO-_jug" />
      </div>
      <div>
        <S.MovieTicketYoutubePlayer url="https://www.youtube.com/embed/hJZ82pwwJqA" />
      </div>
      <div>
        <S.MovieTicketYoutubePlayer url="https://www.youtube.com/embed/EWizz52lZvw" />
      </div>
      <div>
        <S.MovieTicketYoutubePlayer url="https://www.youtube.com/embed/n1iL-DveFUA" />
      </div>
      <div>
        <S.MovieTicketYoutubePlayer url="https://www.youtube.com/embed/-ezfi6FQ8Ds" />
      </div>
    </S.MovieTicketSlider>
  );
}
