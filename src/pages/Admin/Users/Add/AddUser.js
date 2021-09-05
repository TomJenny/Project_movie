import {
  LockOutlined,
  MailOutlined,
  MobileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Col, Form, Row, Select } from "antd";
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { ButtonPrimaryStyled } from "../../../../components/Styles/Button";
import FloatLabel from "../../../../components/Styles/FloatLabel/FloatLabel";
import { FormItemStyled } from "../../../../components/Styles/Form";
import { HeadingH1Styled } from "../../../../components/Styles/Heading";
import {
  InputPasswordStyled,
  InputStyled,
} from "../../../../components/Styles/Input";
import { SelectStyled } from "../../../../components/Styles/Select";
import { UserProfileRegister } from "../../../../components/_core/models/User";
import { postAPINewsUserAction } from "../../../../redux/actions/UserAction";
import { AdminUserAvatar2, AdminUserForm, AdminUserInfo } from "../UserElement";

export default function AddUser() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [labelValue, setlabelValue] = useState({
    taiKhoan: "",
    email: "",
    soDT: "",
    hoTen: "",
    matKhau: "",
    password: "",
    maLoaiNguoiDung: "",
  });

  const onFinish = (values) => {
    const userProfile = new UserProfileRegister();
    userProfile.taiKhoan = values.taiKhoan;
    userProfile.matKhau = values.matKhau;
    userProfile.email = values.email;
    userProfile.soDt = values.soDt;
    userProfile.maLoaiNguoiDung = values.maLoaiNguoiDung;
    userProfile.hoTen = values.hoTen;

    console.log("Received values of form:", userProfile);

    dispatch(postAPINewsUserAction(userProfile));
  };

  return (
    <Fragment>
      <HeadingH1Styled>ADD USER</HeadingH1Styled>
      <AdminUserForm>
        <Row>
          <Col span={7}>
            <AdminUserInfo>
              <AdminUserAvatar2>
                <UserOutlined />
              </AdminUserAvatar2>
              <h1>{labelValue.taiKhoan}</h1>
            </AdminUserInfo>
          </Col>
          <Col span={16}>
            <Form
              form={form}
              name="register"
              onFinish={onFinish}
              scrollToFirstError
            >
              <Row>
                <Col span={12}>
                  <FloatLabel label="Account" value={labelValue.taiKhoan}>
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
                        prefix={
                          <UserOutlined className="site-form-item-icon" />
                        }
                        onChange={(e) =>
                          setlabelValue({
                            ...labelValue,
                            taiKhoan: e.target.value,
                          })
                        }
                      />
                    </FormItemStyled>
                  </FloatLabel>
                  <FloatLabel label="Password" value={labelValue.password}>
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
                    >
                      <InputPasswordStyled
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        onChange={(e) =>
                          setlabelValue({
                            ...labelValue,
                            password: e.target.value,
                          })
                        }
                      />
                    </FormItemStyled>
                  </FloatLabel>
                  <FloatLabel label="Confirm" value={labelValue.matKhau}>
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
                        onChange={(e) =>
                          setlabelValue({
                            ...labelValue,
                            matKhau: e.target.value,
                          })
                        }
                      />
                    </FormItemStyled>
                  </FloatLabel>
                </Col>
                <Col span={12}>
                  <FloatLabel label="Full Name" value={labelValue.hoTen}>
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
                        onChange={(e) =>
                          setlabelValue({
                            ...labelValue,
                            hoTen: e.target.value,
                          })
                        }
                      />
                    </FormItemStyled>
                  </FloatLabel>
                  <FloatLabel label="Email" value={labelValue.email}>
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
                        onChange={(e) =>
                          setlabelValue({
                            ...labelValue,
                            email: e.target.value,
                          })
                        }
                      />
                    </FormItemStyled>
                  </FloatLabel>
                  <FloatLabel label="Phone Number" value={labelValue.soDt}>
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
                        onChange={(e) =>
                          setlabelValue({
                            ...labelValue,
                            soDt: e.target.value,
                          })
                        }
                      />
                    </FormItemStyled>
                  </FloatLabel>
                  <FloatLabel
                    label="Type of Account"
                    value={labelValue.maLoaiNguoiDung}
                    select="true"
                  >
                    <Form.Item
                      name="maLoaiNguoiDung"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please select  a type of account",
                        },
                      ]}
                    >
                      <SelectStyled
                        onChange={(value) =>
                          setlabelValue({
                            ...labelValue,
                            maLoaiNguoiDung: value,
                          })
                        }
                        dropdownAlign={{
                          offset: [0, 4],
                        }}
                        dropdownMatchSelectWidth={100}
                      >
                        <Select.Option value="KhachHang">
                          Customer
                        </Select.Option>
                        <Select.Option value="QuanTri">Manager</Select.Option>
                      </SelectStyled>
                    </Form.Item>
                  </FloatLabel>
                </Col>
              </Row>
              <Row justify="end">
                <ButtonPrimaryStyled
                  type="primary"
                  htmlType="submit"
                  danger
                  style={{ margin: "20px" }}
                >
                  ADD
                </ButtonPrimaryStyled>
              </Row>
            </Form>
          </Col>
        </Row>
      </AdminUserForm>
    </Fragment>
  );
}
