import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form } from "antd";
import React, { useState } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import { ButtonPrimaryStyled } from "../../components/Styles/Button";
import { CheckboxStyled } from "../../components/Styles/CheckBox";
import FloatLabel from "../../components/Styles/FloatLabel/FloatLabel";
import { FormItemStyled } from "../../components/Styles/Form";
import {
  InputPasswordStyled,
  InputStyled,
} from "../../components/Styles/Input";
import { getAPIUserInfoLogin } from "../../redux/actions/UserAction";
import * as S from "./LoginElement";

export default function Login() {
  const dispatch = useDispatch();

  const [defaultValue, setdefaultValue] = useState({
    taiKhoan: "",
    matkhau: "",
  });
  // get value from user input
  const onFinish = (values) => {
    const userInfo = { taiKhoan: values.taiKhoan, matKhau: values.matKhau };

    dispatch(getAPIUserInfoLogin(userInfo));
  };

  return (
    <S.LoginContainer>
      <S.LoginForm
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <S.LoginLogoContent>
          <Logo display={"true"} />
          <S.LoginTitle>Login</S.LoginTitle>
        </S.LoginLogoContent>
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
            name="matKhau"
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
        <S.LoginFormItemCheckbox>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <CheckboxStyled>Remember me</CheckboxStyled>
          </Form.Item>
        </S.LoginFormItemCheckbox>

        <S.LoginFormItemButton>
          <ButtonPrimaryStyled
            type="danger"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </ButtonPrimaryStyled>
        </S.LoginFormItemButton>
        <Form.Item style={{ textAlign: "center" }}>
          <S.LoginFooter style={{ color: "white" }}>
            <span>Don't have an account? </span>
            <NavLink to="/register">Register now.</NavLink>
            <S.LoginDivider
              orientation="center"
              plain
              style={{ color: "white" }}
            >
              OR
            </S.LoginDivider>
            <S.LoginIconSocial>
              <FaFacebookF />
              <FaTwitter />
              <GrGoogle />
            </S.LoginIconSocial>
          </S.LoginFooter>
        </Form.Item>
      </S.LoginForm>
    </S.LoginContainer>
  );
}
