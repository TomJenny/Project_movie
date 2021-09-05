import {
  LockOutlined,
  MailOutlined,
  MobileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Col, Form, Row } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { IoTicketSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { ButtonPrimaryStyled } from "../../components/Styles/Button";
import FloatLabel from "../../components/Styles/FloatLabel/FloatLabel";
import { FormItemStyled } from "../../components/Styles/Form";
import {
  InputPasswordStyled,
  InputStyled,
} from "../../components/Styles/Input";
import { UserProfileRegister } from "../../components/_core/models/User";
import { postAPIUpdateUserAction } from "../../redux/actions/UserAction";
import { PUBLIC_URL } from "../../utils/setting";
import {
  ProfileForm,
  ProfileImg,
  ProfileInfoName,
  ProfileInfoTicket,
  ProfileInfoUser,
} from "./UserProfileElement";

export default function Profile(props) {
  const dispatch = useDispatch();

  const { accountInfo } = props;

  const { taiKhoan, email, soDT, hoTen, matKhau } = accountInfo;

  const [defaultValue, setdefaultValue] = useState({
    taiKhoan: "",
    email: "",
    soDT: "",
    hoTen: "",
    matKhau: "",
    password: "",
  });

  const [form] = Form.useForm();
  useEffect(() => {
    setdefaultValue({
      taiKhoan: taiKhoan,
      email: email,
      soDt: soDT,
      hoTen: hoTen,
      matKhau: matKhau,
      password: matKhau,
    });
    form.setFieldsValue({
      taiKhoan: taiKhoan,
      email: email,
      soDt: soDT,
      hoTen: hoTen,
      matKhau: matKhau,
      password: matKhau,
    });
  }, [accountInfo]);

  const onFinish = (values) => {
    const userProfile = new UserProfileRegister();
    userProfile.taiKhoan = values.taiKhoan;
    userProfile.matKhau = values.matKhau;
    userProfile.email = values.email;
    userProfile.soDt = values.soDt;
    userProfile.hoTen = values.hoTen;
    const isAdmin = false;

    dispatch(postAPIUpdateUserAction(userProfile, isAdmin));
  };

  return (
    <Fragment>
      <Row justify="center">
        <Col span={24} md={{ span: 5 }}>
          <ProfileInfoUser>
            <ProfileImg src={PUBLIC_URL + "/img/Charactor.svg"} alt="avatar" />
            <ProfileInfoName>{hoTen}</ProfileInfoName>
            <ProfileInfoTicket>
              <IoTicketSharp />
              {accountInfo?.thongTinDatVe?.length}
            </ProfileInfoTicket>
          </ProfileInfoUser>
        </Col>
        <Col span={24} md={{ span: 16 }} lg={{ span: 13, push: 1 }}>
          <ProfileForm>
            <Form form={form} onFinish={onFinish} scrollToFirstError>
              <Row gutter={[16, 16]}>
                <Col span={24} sm={{ span: 12 }}>
                  <FloatLabel label="Account" value={defaultValue.taiKhoan}>
                    <FormItemStyled
                      name="taiKhoan"
                      rules={[
                        {
                          required: true,
                          message: "Please input your name Account!",
                          whitespace: true,
                        },
                      ]}
                    >
                      <InputStyled
                        disabled={true}
                        prefix={
                          <UserOutlined className="site-form-item-icon" />
                        }
                        value={defaultValue.taiKhoan}
                        onChange={(e) =>
                          setdefaultValue({
                            ...defaultValue,
                            taiKhoan: e.target.value,
                          })
                        }
                      />
                    </FormItemStyled>
                  </FloatLabel>
                  <FloatLabel label="Password" value={defaultValue.password}>
                    <FormItemStyled
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                        {
                          pattern:
                            "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
                          message: "Please enter a valid Password",
                        },
                      ]}
                      hasFeedback
                    >
                      <InputPasswordStyled
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        autoComplete={defaultValue.password}
                        onChange={(e) =>
                          setdefaultValue({
                            ...defaultValue,
                            password: e.target.value,
                          })
                        }
                      />
                    </FormItemStyled>
                  </FloatLabel>
                  <FloatLabel label="Confirm" value={defaultValue.matKhau}>
                    <FormItemStyled
                      name="matKhau"
                      dependencies={["password"]}
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                              return Promise.resolve();
                            }

                            return Promise.reject(
                              new Error(
                                "The two passwords that you entered do not match!"
                              )
                            );
                          },
                        }),
                        {
                          pattern:
                            "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
                          message: "Please enter a valid Password",
                        },
                      ]}
                    >
                      <InputPasswordStyled
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        autoComplete={defaultValue.matKhau}
                        onChange={(e) =>
                          setdefaultValue({
                            ...defaultValue,
                            matKhau: e.target.value,
                          })
                        }
                      />
                    </FormItemStyled>
                  </FloatLabel>
                </Col>
                <Col span={24} sm={{ span: 12 }}>
                  <FloatLabel label="Full Name" value={defaultValue.hoTen}>
                    <FormItemStyled
                      name="hoTen"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Full Name!",
                          whitespace: true,
                        },
                      ]}
                    >
                      <InputStyled
                        prefix={
                          <UserOutlined className="site-form-item-icon" />
                        }
                        value={defaultValue.hoTen}
                        onChange={(e) =>
                          setdefaultValue({
                            ...defaultValue,
                            password: e.target.value,
                          })
                        }
                      />
                    </FormItemStyled>
                  </FloatLabel>
                  <FloatLabel label="Email" value={defaultValue.email}>
                    <FormItemStyled
                      name="email"
                      rules={[
                        {
                          type: "email",
                          message: "The input is not valid E-mail!",
                        },
                        {
                          required: true,
                          message: "Please input your E-mail!",
                        },
                      ]}
                    >
                      <InputStyled
                        prefix={
                          <MailOutlined className="site-form-item-icon" />
                        }
                        value={defaultValue.email}
                        onChange={(e) =>
                          setdefaultValue({
                            ...defaultValue,
                            password: e.target.value,
                          })
                        }
                      />
                    </FormItemStyled>
                  </FloatLabel>
                  <FloatLabel label="Phone Number" value={defaultValue.soDt}>
                    <FormItemStyled
                      name="soDt"
                      rules={[
                        {
                          required: true,
                          message: "Please input your phone number!",
                        },
                        {
                          pattern: "[0-9]{10}",
                          message: "Please enter a valid Phone Number",
                        },
                      ]}
                    >
                      <InputStyled
                        prefix={
                          <MobileOutlined className="site-form-item-icon" />
                        }
                        value={defaultValue.soDt}
                        onChange={(e) =>
                          setdefaultValue({
                            ...defaultValue,
                            password: e.target.value,
                          })
                        }
                      />
                    </FormItemStyled>
                  </FloatLabel>
                </Col>
              </Row>
              <Form.Item>
                <Row justify="end">
                  <Col>
                    <ButtonPrimaryStyled
                      type="primary"
                      htmlType="submit"
                      danger
                    >
                      Edit Profile
                    </ButtonPrimaryStyled>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          </ProfileForm>
        </Col>
      </Row>
    </Fragment>
  );
}
