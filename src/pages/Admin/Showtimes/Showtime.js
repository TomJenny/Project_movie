import { Col, Form, Row } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { ButtonPrimaryStyled } from "../../../components/Styles/Button";
import { CascaderStyled } from "../../../components/Styles/Cascader";
import { DatePickerStyled } from "../../../components/Styles/DatePicker";
import FloatLabel from "../../../components/Styles/FloatLabel/FloatLabel";
import { FormItemStyled } from "../../../components/Styles/Form";
import { HeadingH1Styled } from "../../../components/Styles/Heading";
import { InputNumberStyled } from "../../../components/Styles/InputNumber";
import { SelectStyled } from "../../../components/Styles/Select";
import { ShowtimeObj } from "../../../components/_core/models/Showtimes";
import { manageCinemaService } from "../../../services/ManageCinemaService";
import { manageBoxOfficeService } from "../../../services/ManagerBoxOfficeService";
import { PUBLIC_URL } from "../../../utils/setting";
import {
  AdminShowTimeFilmName,
  AdminShowtimeFormContainer,
  AdminShowtimeImage,
  AdminShowtimesContainer,
} from "./ShowtimesElement";

export default function Showtime(props) {
  const [state, setState] = useState({
    heThongRapChieu: [],
    cumRapChieu: [],
  });

  let film = {};
  if (localStorage.getItem("filmParams")) {
    film = JSON.parse(localStorage.getItem("filmParams"));
  }

  const [labelValue, setLabelValue] = useState({
    ngayChieuGioChieu: "",
    cinema: "",
    maRap: "",
    giaVe: "",
  });
  const onFinish = async (values) => {
    const showtime = new ShowtimeObj();
    showtime.giaVe = values.giaVe;
    showtime.maPhim = film.maPhim;
    showtime.maRap = values.maRap[1];
    showtime.ngayChieuGioChieu = values.ngayChieuGioChieu.format(
      "DD/MM/YYYY hh:mm:ss"
    );

    try {
      const result = await manageBoxOfficeService
        .postCreateSchedule(showtime)
        .catch((error) => {
          throw error;
        });

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Create Showtime Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Create Showtime Fail",
        text: `${error.response?.data}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  useEffect(() => {
    (async () => {
      try {
        let result = await manageCinemaService.getListCinemas();
        setState({
          ...state,
          heThongRapChieu: result.data,
        });
      } catch (error) {
        console.log("error", error.response?.data);
      }
    })();
  }, []);

  const handleChangeCinema = async (value) => {
    try {
      let result = await manageCinemaService.getListCinemaBranches(value);
      setState({
        ...state,
        cumRapChieu: result.data,
      });
    } catch (error) {
      console.log("error", error.response?.data);
    }
    setLabelValue({
      ...labelValue,
      cinema: value,
    });
  };

  const handleOptionCinema = () => {
    return state.cumRapChieu?.map((cumRap, index) => {
      let theater = cumRap.danhSachRap?.map((theater) => ({
        value: theater.maRap,
        label: theater.tenRap,
      }));

      return {
        value: cumRap.maCumRap,
        label: cumRap.tenCumRap,
        children: theater,
      };
    });
  };

  const handleChangeCinemaBranch = (value) => {
    setLabelValue({
      ...labelValue,
      maRap: value,
    });
  };

  const onOk = (values) => {
    setLabelValue({
      ...labelValue,
      ngayChieuGioChieu: moment(values).format("DD/MM/YYYY hh:mm:ss"),
    });
  };

  const onChangeDate = (values) => {
    setLabelValue({
      ...labelValue,
      ngayChieuGioChieu: moment(values).format("DD/MM/YYYY hh:mm:ss"),
    });
  };

  const convertSelectHTR = () => {
    return state.heThongRapChieu?.map((htr, index) => {
      return { label: htr.tenHeThongRap, value: htr.maHeThongRap };
    });
  };

  return (
    <AdminShowtimesContainer>
      <HeadingH1Styled>ADD SHOWTIMES</HeadingH1Styled>
      <AdminShowtimeFormContainer>
        <Row justify="center">
          <Col span={4}>
            <AdminShowtimeImage
              src={film.hinhAnh || PUBLIC_URL + "/img/Error/errorImage.png"}
              alt="..."
              fallback={PUBLIC_URL + "/img/Error/errorImage.png"}
            />
            <AdminShowTimeFilmName>{film.tenPhim}</AdminShowTimeFilmName>
          </Col>
          <Col span={10}>
            <Form name="basic" onFinish={onFinish}>
              <FloatLabel label="Cinema" value={labelValue.cinema}>
                <FormItemStyled
                  name="cinema"
                  rules={[
                    {
                      required: true,
                      message: "Please select Cinema",
                    },
                  ]}
                >
                  <SelectStyled
                    options={convertSelectHTR()}
                    onChange={handleChangeCinema}
                  />
                </FormItemStyled>
              </FloatLabel>
              <FloatLabel label="Cinema Branch" value={labelValue.maRap}>
                <FormItemStyled
                  name="maRap"
                  rules={[
                    {
                      required: true,
                      message: "Please select Cinema Branch",
                    },
                  ]}
                >
                  <CascaderStyled
                    options={handleOptionCinema()}
                    onChange={handleChangeCinemaBranch}
                    placeholder=""
                  />
                </FormItemStyled>
              </FloatLabel>
              <FloatLabel
                label="Time and Date"
                value={labelValue.ngayChieuGioChieu}
              >
                <FormItemStyled
                  name="ngayChieuGioChieu"
                  rules={[
                    {
                      required: true,
                      message: "Please choose Date and Time",
                    },
                  ]}
                >
                  <DatePickerStyled
                    format="DD/MM/YYYY hh:mm:ss"
                    showTime
                    onChange={onChangeDate}
                    onOk={onOk}
                    placeholder=""
                  />
                </FormItemStyled>
              </FloatLabel>
              <FloatLabel label="Price" value={labelValue.giaVe}>
                <FormItemStyled
                  name="giaVe"
                  rules={[
                    {
                      required: true,
                      message: "Please choose Price 75K to 200k",
                    },
                    {
                      type: "number",
                      min: 75000,
                      max: 200000,
                      message: "Please choose Price 75K to 200k",
                    },
                  ]}
                >
                  <InputNumberStyled
                    min={75000}
                    max={200000}
                    onChange={(value) => {
                      setLabelValue({
                        ...labelValue,
                        giaVe: value,
                      });
                    }}
                  />
                </FormItemStyled>
              </FloatLabel>

              <Row justify="end">
                <Form.Item>
                  <ButtonPrimaryStyled type="primary" htmlType="submit" danger>
                    ADD
                  </ButtonPrimaryStyled>
                </Form.Item>
              </Row>
            </Form>
          </Col>
        </Row>
      </AdminShowtimeFormContainer>
    </AdminShowtimesContainer>
  );
}
