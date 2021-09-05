import { Divider, Input } from "antd";
import Form from "antd/lib/form/Form";
import FormItem from "antd/lib/form/FormItem";
import Password from "antd/lib/input/Password";
import { Link } from "react-router-dom";
import { down } from "styled-breakpoints";
import styled, { css, keyframes } from "styled-components/macro";

export const LoginLogoContent = styled.div`
  text-align: center;
  margin: 30px auto;
`;
export const LoginLogo = styled(Link)`
  display: block;

  & img {
    width: 110px;
    transition: all 0.5s ease;

    &:hover {
      transform: translateY(-5px);
      filter: drop-shadow(0 0 10px black) brightness(1.2);
    }
  }
`;

const AnimateForm = keyframes`
0% {
    opacity: 0;
    transform: translateY(30px);
}
100%{
    opacity: 1;
    transform: translateY(0);
}
`;
export const LoginContainer = styled.div`
  /* animation: ${AnimateForm} 1s ease 1; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  width: 380px;
  height: auto;
  padding: 15px;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  ${down("sm")} {
    animation: none;
    top: 0;
    left: 0;
    transform: none;
    padding-top: 50px 10px 0;
    width: 100vw !important;
    height: 100vh !important;
  }
`;

export const LoginTitle = styled.h1`
  display: block;

  color: ${({ theme }) => theme.colors.white1};
  text-align: center;
  margin: 20px;
  font-size: 2.8rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: 3px;
  text-shadow: 0 0 10px black;
  ${down("sm")} {
    margin-top: 120px;
  }
`;

export const LoginForm = styled(Form)``;
export const LoginFormItemInput = styled(FormItem)`
  position: relative;

  margin-bottom: 15px;
  height: 65px;

  & .ant-form-item-label {
    position: absolute;
    z-index: 99999;

    left: ${(props) => (props.focus === "true" ? "30px" : "38px")};
    top: ${(props) => (props.focus === "true" ? "-22px" : "5px")};
    transition: all 0.5s ease;

    pointer-events: none !important;
    & label {
      pointer-events: none !important;

      color: white;
      font-size: ${(props) => (props.focus === "true" ? "0.8rem" : "1rem")};
      &::after,
      &::before {
        display: none !important;
      }
    }
  }

  & .ant-form-item-explain,
  & .ant-form-item-extra {
    padding-left: 15px;
    line-height: 2.5;
  }
`;

const LoginInputCss = css`
  background-color: transparent !important;
  color: white;
  border: none;

  & input {
    background-color: transparent !important;
    color: white;
  }

  &.ant-input-affix-wrapper,
  &.ant-form-item-has-error {
    border: none;
    box-shadow: none;
  }
  &::after {
    display: block;
    content: "";
    position: absolute;
    z-index: 9999;
    bottom: -3px;
    left: 10px;

    height: 1.5px;
    width: 93%;
    background-color: ${(props) =>
      props.focus === "true" ? "white" : "rgba(255, 255, 255, 0.6)"};
  }
`;

export const LoginInput = styled(Input)`
  ${LoginInputCss}
`;

export const LoginInputPassword = styled(Password)`
  ${LoginInputCss}

  & .ant-input-suffix  svg {
    color: white;
    margin-right: 12px;
  }
`;

export const LoginFormItemCheckbox = styled(FormItem)`
  padding-left: 11px;
  margin: 0;
  & .ant-checkbox + span {
    color: white !important;
  }
`;

export const LoginFormItemButton = styled(FormItem)`
  margin: 5px 0;
  padding: 10px 0;

  text-align: center;

  & button {
    width: 120px;
  }
`;

export const LoginFooter = styled.div`
  color: white;
  & a {
    color: ${({ theme }) => theme.colors.red1};
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const LoginDivider = styled(Divider)`
  color: white;
  &&&.ant-divider-horizontal.ant-divider-with-text {
    border-top-color: white !important;
  }
`;

export const LoginIconSocial = styled.div`
  & svg {
    font-size: 2.2rem;
    border-radius: 50%;
    border: 0.5px solid ${({ theme }) => theme.colors.black3};
    padding: 8px;
    margin: 0 10px;
    &:hover {
      border: none;
      filter: drop-shadow(0 0 4px ${({ theme }) => theme.colors.black1});
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
