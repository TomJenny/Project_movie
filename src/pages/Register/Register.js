import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Form, Row } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Logo from "../../components/Logo/Logo";
import { ButtonPrimaryStyled } from "../../components/Styles/Button";
import FloatLabel from "../../components/Styles/FloatLabel/FloatLabel";
import { FormItemStyled } from "../../components/Styles/Form";
import {
  InputPasswordStyled,
  InputStyled
} from "../../components/Styles/Input";
import { UserProfileRegister } from "../../components/_core/models/User";
import { postAPIUserInfoSignIn } from "../../redux/actions/UserAction";
import * as S from "./RegisterELement";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 12,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 12,
    },
    sm: {
      span: 16,
    },
  },
};

export default function Register() {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const [defaultValue, setdefaultValue] = useState({
    taiKhoan: "",
    email: "",
    soDT: "",
    hoTen: "",
    matKhau: "",
    password: "",
  });

  const onFinish = (values) => {
    const userProfile = new UserProfileRegister();
    userProfile.taiKhoan = values.taiKhoan;
    userProfile.matKhau = values.matKhau;
    userProfile.email = values.email;
    userProfile.soDt = values.soDt;
    userProfile.hoTen = values.hoTen;
    console.log("Received values of form:", userProfile);

    dispatch(postAPIUserInfoSignIn(userProfile));
  };

  return (
    <S.RegisterContainer>
      <Logo display={"true"} />
      <S.RegisterTitle>Sign Up</S.RegisterTitle>
      <S.RegisterForm
        form={form}
        name="register"
        onFinish={onFinish}
        {...formItemLayout}
        scrollToFirstError
      >
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
              prefix={<UserOutlined className="site-form-item-icon" />}
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
          >
            <InputPasswordStyled
              prefix={<LockOutlined className="site-form-item-icon" />}
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
              prefix={<LockOutlined className="site-form-item-icon" />}
              onChange={(e) =>
                setdefaultValue({
                  ...defaultValue,
                  matKhau: e.target.value,
                })
              }
            />
          </FormItemStyled>
        </FloatLabel>
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
              prefix={<UserOutlined className="site-form-item-icon" />}
              onChange={(e) =>
                setdefaultValue({
                  ...defaultValue,
                  hoTen: e.target.value,
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
              prefix={<MailOutlined className="site-form-item-icon" />}
              onChange={(e) =>
                setdefaultValue({
                  ...defaultValue,
                  email: e.target.value,
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
              prefix={<PhoneOutlined className="site-form-item-icon" />}
              onChange={(e) =>
                setdefaultValue({
                  ...defaultValue,
                  soDt: e.target.value,
                })
              }
            />
          </FormItemStyled>
        </FloatLabel>

        <Form.Item>
          <Row justify="center">
            <ButtonPrimaryStyled
              type="primary"
              htmlType="submit"
              danger
              style={{ width: "120px" }}
            >
              Register
            </ButtonPrimaryStyled>
          </Row>
          <Row justify="center">
            <S.RegisterFooter>
              <span>Already have an account? </span>
              <S.RegisterNavLink to="/login">Login now!</S.RegisterNavLink>
            </S.RegisterFooter>
          </Row>
        </Form.Item>
      </S.RegisterForm>
    </S.RegisterContainer>
  );
}
