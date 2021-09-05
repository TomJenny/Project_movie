import { Button, Dropdown, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import MenuItem from "antd/lib/menu/MenuItem";
import { Link, NavLink } from "react-router-dom";
import * as LinkScroll from "react-scroll";
import { down } from "styled-breakpoints";
import styled, { css } from "styled-components/macro";
import { ButtonPrimaryStyled } from "../../Styles/Button";
import { GlassEffect } from "../../Styles/mixin";

const HeaderBackgroundNone = css`
  position: fixed;
  box-shadow: none;
  border: none;
  background: none;
`;

export const HeaderContainer = styled(Header)`
  ${GlassEffect({
    color: "0,0,0",
    trans: 0.4,
    blur: "0",
    border: "none",
    radius: "none",
    boxshadow: "none",
  })}
  position: fixed;
  width: 100vw;
  z-index: 999999;
  height: 70px !important;
  transition: all 0.2s ease-in;

  ${(props) =>
    props.ischeckout &&
    css`
      width: 70% !important;
      background: none !important;
      padding: 0 10px;
    `}
  ${(props) =>
    props.tabactive === "2" &&
    css`
      transition: all 0.2s ease-in;
      width: 100vw !important;
      background: none !important;
    `}
  ${(props) => props.isuserprofile && HeaderBackgroundNone}
 
  ${down("sm")} {
    width: 100vw !important;
  }

  ${down("md")} {
    width: 100vw;
    padding: 0 10px;

    background-color: ${(props) =>
      props.buttontogglestatus === "active" ? "black" : null};
  }
`;

export const HeaderLogo = styled(Link)`
  & img {
    height: 40px;
  }
  ${down("md")} {
    & img {
      height: 35px;
    }
  }
`;

export const HeaderMenu = styled(Menu)`
  display: block;
  font-size: 15px !important;
  background-color: transparent;
  border: none;
  width: 480px;

  ${(props) =>
    props.ischeckout || props.isuserprofile ? { display: "none" } : null}

  ${down("sm")} {
    display: block !important;

    position: absolute;
    z-index: 9;
    top: 70px;
    left: 0 !important;
    width: 100vw;
    height: 100vh;
    transform: ${(props) =>
      props.buttontogglestatus === "active"
        ? "translateX(0)"
        : "translateX(100%)"};
    transition: all 0.85s ease;
    opacity: ${(props) => (props.buttontogglestatus === "active" ? "1" : "0")};
    background-color: ${(props) =>
      props.buttontogglestatus === "active" ? "black" : null};
  }

  ${down("md")} {
    display: none;
  }
`;

export const HeaderMenuItem = styled(MenuItem)`
  display: flex;
  height: 70px !important;
  &&&::after {
    bottom: 10px;
  }

  &.ant-menu-item-selected::after,
  &:hover::after,
  &:active::after,
  &:focus::after,
  &:target::after {
    border-bottom: 3px solid red !important;
    border-right: none !important;
    background: red !important;
  }

  ${down("md")} {
    justify-content: center !important;

    height: 50px !important;
    &.ant-menu-item-selected {
      background-color: rgba(255, 0, 0) !important;
    }
    &.ant-menu-item:hover,
    &.ant-menu-item-active,
    &.ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
    &.ant-menu-submenu-active,
    &.ant-menu-submenu-title:hover {
      background: red !important;
    }
  }
`;
export const HeaderMenuLink = styled(NavLink)`
  color: white !important;
  bottom: 10px !important;
  font-weight: ${({ theme }) => theme.fontWeight.regular} !important;
`;
export const HeaderMainMenu = styled(LinkScroll.Link)`
  color: white !important;
  bottom: 10px !important;
  font-weight: ${({ theme }) => theme.fontWeight.regular}!important; ;
`;

// Button Register
export const HeaderRegisterButton = styled(ButtonPrimaryStyled)`
  margin-right: 30px;
  & svg {
    font-size: 15px;
  }
  &&& span {
    display: inline-block;
  }
`;

// Avatar user
export const HeaderUserAvatar = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 30px;
  height: 30px;
  margin-right: 5px;
  margin-bottom: 2px;
  filter: contrast(120%);
`;

// Button Toggle Menu
export const ButtonToggle = styled.button`
  color: red;
  width: 36px;
  height: 36px;
  padding: 0;
  margin: 0;
  outline: none;
  position: relative;
  border: none;
  background: none;
  cursor: pointer;
  -webkit-appearence: none;
  -webkit-tap-highlight-color: transparent;
  & svg {
    width: 64px;
    height: 48px;
    top: -6px;
    left: -14px;
    stroke: red;
    stroke-width: 4px;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
    display: block;
    position: absolute;
    path {
      transition: stroke-dasharray var(--duration, 0.85s) var(--easing, ease)
          var(--delay, 0s),
        stroke-dashoffset var(--duration, 0.85s) var(--easing, ease)
          var(--delay, 0s);
      stroke-dasharray: var(--array-1, 26px) var(--array-2, 100px);
      stroke-dashoffset: var(--offset, 126px);
      transform: translateZ(0);
      &:nth-child(2) {
        --duration: 0.7s;
        --easing: ease-in;
        --offset: 100px;
        --array-2: 74px;
      }
      &:nth-child(3) {
        --offset: 133px;
        --array-2: 107px;
      }
    }
  }
  &.active {
    svg {
      path {
        --offset: 57px;
        &:nth-child(1),
        &:nth-child(3) {
          --delay: 0.15s;
          --easing: cubic-bezier(0.2, 0.4, 0.2, 1.1);
        }
        &:nth-child(2) {
          --duration: 0.4s;
          --offset: 2px;
          --array-1: 1px;
        }
        &:nth-child(3) {
          --offset: 58px;
        }
      }
    }
  }
`;

//Button Login
export const HeaderLoginButton = styled(Button)`
  margin-right: 20px;
  position: relative;
  background-color: transparent;
  color: white;
  border: 1px dashed ${({ theme }) => theme.colors.white1};
  ${(props) =>
    props.islogin &&
    css`
      padding-left: 40px;
      border: none;
    `}
  &:hover,
  &:active,
  &:focus {
    background-color: transparent !important;
    color: white;
    border: 1px dashed ${({ theme }) => theme.colors.primary};
    ${(props) =>
      props.islogin &&
      css`
        border: none;
      `}
    box-shadow: none !important;
  }
  ${down("md")} {
    margin-right: 0;
  }
`;

export const DropdownHeader = styled(Dropdown)`
  &[ant-click-animating-without-extra-node]:after {
    -webkit-animation: none !important;
    -moz-animation: none !important;
    -o-animation: none !important;
    -ms-animation: none !important;
    animation: none !important;
  }
`;
export const CheckoutSteps = styled.div`
  max-width: 500px;
  width: 300px;
  z-index: 9;
  height: auto;
  ${down("xs")} {
    width: 250px;

    display: none;
  }

  */ & .ant-steps {
    margin: 5px auto;
  }
  &
    .ant-steps-item-process
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: ${({ theme }) => theme.colors.white1};
  }
  & .ant-steps-item-finish .ant-steps-item-icon {
    border-color: ${({ theme }) => theme.colors.white1};
    & svg {
      color: ${({ theme }) => theme.colors.white1};
    }
  }
  &
    .ant-steps-item-finish
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title::after {
    background-color: ${({ theme }) => theme.colors.white1};
  }
  &
    .ant-steps-item-wait
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: ${({ theme }) => theme.colors.white3};
  }
  &&& .ant-steps-item-wait .ant-steps-item-icon {
    background: transparent;
    border-color: ${({ theme }) => theme.colors.white3};
  }
  & .ant-steps-item-wait .ant-steps-item-icon > .ant-steps-icon {
    color: ${({ theme }) => theme.colors.white3};
  }
  & .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-icon {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.3) 50%
    );
    border: 1px solid ${({ theme }) => theme.colors.white1};
  }

  & .ant-steps-item-finish .ant-steps-item-icon {
    background: transparent;
  }

  &
    .ant-steps-item-finish
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: ${({ theme }) => theme.colors.white1};
  }
`;
