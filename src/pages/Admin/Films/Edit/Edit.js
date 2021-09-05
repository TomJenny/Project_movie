import { UploadOutlined } from "@ant-design/icons";
import { Col, Form, Image, Row, Upload } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { RiMovie2Line, RiMovieLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import SpinLoading from "../../../../components/Loading/Spin/Spin";
import { ButtonPrimaryStyled } from "../../../../components/Styles/Button";
import { DatePickerStyled } from "../../../../components/Styles/DatePicker";
import FloatLabel from "../../../../components/Styles/FloatLabel/FloatLabel";
import { FormItemStyled } from "../../../../components/Styles/Form";
import { HeadingH1Styled } from "../../../../components/Styles/Heading";
import {
  InputStyled,
  TextAreaStyled,
} from "../../../../components/Styles/Input";
import { InputNumberStyled } from "../../../../components/Styles/InputNumber";
import { SwitchStyled } from "../../../../components/Styles/Switch";
import { FilmObj } from "../../../../components/_core/models/Films";
import {
  getAPIFilmByIdAction,
  postAPIUpdateFilmAction,
} from "../../../../redux/actions/FilmAction";
import { AdminFilmButtonSubmit, AdminFilmEditContainer } from "../FilmElement";

export default function Edit(props) {
  const { filmDetail } = useSelector((state) => state.FilmReducer);
  const [isLoading, setIsLoading] = useState(true);
  const [form] = Form.useForm();

  // get input for label when user are typing and focusing
  const [labelValue, setlabelValue] = useState({
    tenPhim: "",
    trailer: "",
    danhGia: 0,
    moTa: "",
    ngayKhoiChieu: "",
  });

  const [fileList, setFileList] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let { id } = props.match.params;

      await dispatch(getAPIFilmByIdAction(id));

      await setIsLoading(false);
    })();
  }, []);

  //set initialize value
  useEffect(() => {
    setlabelValue({
      danhGia: filmDetail?.danhGia,
      tenPhim: filmDetail?.tenPhim,
      trailer: filmDetail?.trailer,
      moTa: filmDetail?.moTa,
      ngayKhoiChieu: moment(filmDetail.ngayKhoiChieu),
      biDanh: filmDetail?.biDanh,
    });
    form.setFieldsValue({
      danhGia: filmDetail?.danhGia,
      tenPhim: filmDetail?.tenPhim,
      trailer: filmDetail?.trailer,
      moTa: filmDetail?.moTa,
      ngayKhoiChieu: moment(filmDetail.ngayKhoiChieu),
      biDanh: filmDetail?.biDanh,
      dangChieu: true,
      sapChieu: true,
      hot: true,
    });
  }, [filmDetail]);

  const onFinish = (values) => {
    const filmObj = new FilmObj();
    filmObj.maPhim = filmDetail.maPhim;
    filmObj.tenPhim = values.tenPhim;
    filmObj.biDanh = values.biDanh;
    filmObj.moTa = values.moTa;
    filmObj.trailer = values.trailer;
    filmObj.hinhAnh = fileList;
    filmObj.ngayKhoiChieu = moment(values.ngayKhoiChieu).format(
      "YYYY-MM-DDTHH:mm:ss.SS"
    );
    filmObj.danhGia = values.danhGia;

    if (!fileList) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Please Upload Image!",
        showConfirmButton: false,
        timer: 1000,
      });
    }
    let formData = new FormData();
    for (let key in filmObj) {
      if (key !== "hinhAnh") {
        formData.append(key, filmObj[key]);
      } else {
        if (filmObj.hinhAnh !== null) {
          formData.append("File", filmObj.hinhAnh, filmObj.hinhAnh.name);
        }
      }
    }
    dispatch(postAPIUpdateFilmAction(formData));
  };

  //get file from upload
  const handleUpload = async ({ fileList }) => {
    let file =
      fileList.length === 1
        ? fileList[0].originFileObj
        : fileList[fileList.length - 1].originFileObj;

    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    ) {
      setFileList(file);

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };
    }
  };

  const formItemLayout = {
    labelCol: { span: 12 },
  };

  return (
    <>
      <Form
        form={form}
        scrollToFirstError
        onFinish={onFinish}
        {...formItemLayout}
        layout="horizontal"
      >
        <HeadingH1Styled>EDIT FILM</HeadingH1Styled>
        {isLoading ? (
          <SpinLoading />
        ) : (
          <AdminFilmEditContainer>
            <Row>
              <Col span={10}>
                <FloatLabel label="Name" value={labelValue.tenPhim}>
                  <FormItemStyled
                    name="tenPhim"
                    rules={[
                      {
                        required: true,
                        message: "Please input name of film!",
                        whitespace: true,
                      },
                    ]}
                  >
                    <InputStyled
                      prefix={<RiMovie2Line className="site-form-item-icon" />}
                      onChange={(e) =>
                        setlabelValue({
                          ...labelValue,
                          tenPhim: e.target.value,
                        })
                      }
                    />
                  </FormItemStyled>
                </FloatLabel>
                <FloatLabel label="Alias" value={labelValue.biDanh}>
                  <FormItemStyled
                    name="biDanh"
                    rules={[
                      {
                        required: true,
                        message: "Please input alias of film!",
                        whitespace: true,
                      },
                    ]}
                  >
                    <InputStyled
                      prefix={<RiMovie2Line className="site-form-item-icon" />}
                      onChange={(e) =>
                        setlabelValue({
                          ...labelValue,
                          biDanh: e.target.value,
                        })
                      }
                    />
                  </FormItemStyled>
                </FloatLabel>

                <FloatLabel label="Trailer" value={labelValue.trailer}>
                  <FormItemStyled
                    name="trailer"
                    rules={[
                      {
                        required: true,
                        message: "Please input trailer!",
                        whitespace: true,
                      },
                    ]}
                  >
                    <InputStyled
                      prefix={<RiMovieLine className="site-form-item-icon" />}
                      onChange={(e) =>
                        setlabelValue({
                          ...labelValue,
                          trailer: e.target.value,
                        })
                      }
                    />
                  </FormItemStyled>
                </FloatLabel>
                <Row>
                  <Col span={12}>
                    <FloatLabel
                      label="Opening Day"
                      value={labelValue.ngayKhoiChieu}
                    >
                      <Form.Item
                        name="ngayKhoiChieu"
                        rules={[
                          {
                            required: true,
                            message: "Please choose Opening day",
                          },
                        ]}
                      >
                        <DatePickerStyled
                          prefix={
                            <RiMovieLine className="site-form-item-icon" />
                          }
                          format="DD/MM/YYYY"
                          placeholder=""
                          onChange={(value) =>
                            setlabelValue({
                              ...labelValue,
                              ngayKhoiChieu: value,
                            })
                          }
                        />
                      </Form.Item>
                    </FloatLabel>
                  </Col>
                  <Col span={12}>
                    <FloatLabel label="Rate" value={labelValue.danhGia}>
                      <FormItemStyled
                        name="danhGia"
                        rules={[
                          {
                            required: true,
                            message: "Rate from 1 to 10",
                          },
                          {
                            type: "number",
                            min: 1,
                            max: 10,
                            message: "Rate from 1 to 10",
                          },
                        ]}
                      >
                        <InputNumberStyled
                          max={10}
                          min={1}
                          onChange={(value) => {
                            setlabelValue({
                              ...labelValue,
                              danhGia: value,
                            });
                          }}
                        />
                      </FormItemStyled>
                    </FloatLabel>
                  </Col>
                </Row>
              </Col>

              <Col span={6} push={1}>
                <Form.Item
                  label="ShowTime"
                  name="dangChieu"
                  valuePropName="checked"
                >
                  <SwitchStyled />
                </Form.Item>
                <Form.Item
                  label="Comming Soon"
                  name="sapChieu"
                  valuePropName="checked"
                >
                  <SwitchStyled />
                </Form.Item>
                <Form.Item label="Hot" name="hot" valuePropName="checked">
                  <SwitchStyled />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Row justify="center">
                  <Image
                    width={180}
                    height={250}
                    style={{ borderRadius: "10px" }}
                    src={imgSrc === "" ? filmDetail.hinhAnh : imgSrc}
                  />
                </Row>
                <Row justify="center">
                  <Upload
                    showUploadList={false}
                    onChange={handleUpload}
                    beforeUpload={() => false}
                  >
                    <ButtonPrimaryStyled
                      type="primary"
                      danger
                      icon={<UploadOutlined />}
                      style={{ marginTop: "20px" }}
                    >
                      Click to Upload
                    </ButtonPrimaryStyled>
                  </Upload>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col span={18}>
                <FloatLabel
                  label="Description"
                  textarea="true"
                  value={labelValue.trailer}
                >
                  <FormItemStyled
                    name="moTa"
                    rules={[
                      {
                        required: true,
                        message: "Please input description!",
                        whitespace: true,
                      },
                    ]}
                  >
                    <TextAreaStyled
                      autoSize={{ minRows: 2, maxRows: 7 }}
                      allowClear
                    />
                  </FormItemStyled>
                </FloatLabel>
              </Col>
            </Row>

            <AdminFilmButtonSubmit type="primary" danger htmlType="submit">
              UPDATE
            </AdminFilmButtonSubmit>
          </AdminFilmEditContainer>
        )}
      </Form>
    </>
  );
}
