import { Button } from "antd";
import { down } from "styled-breakpoints";
import styled, { css, keyframes } from "styled-components";

const animationSideBar = keyframes`
0%{
  right: -100%;
  opacity: 0;

}
100%{
  right: 0;
  opacity: 1;

}
`;

export const SideBarContainer = styled.div`
  height: 100vh;
  width: 30%;
  position: absolute;
  right: 0;
  z-index: 4;
  top: 0;

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);

  border: 1px solid rgba(255, 255, 255, 0.18);
  animation: ${animationSideBar} 1s linear;

  ${(props) =>
    props.tabActive === "2" &&
    css`
      display: none;
    `}
  ${down("sm")} {
    display: none;
    ${(props) =>
      props.displaySidebar &&
      css`
        display: block;
        width: 100vw;
        padding-top: 50px;
      `}
  }
`;
export const SideBarContentOverlay = styled.div`
  overflow-y: auto;
  margin-top: 20px;
  height: 90%;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
export const SideBarImg = styled.div`
  background: url(${(props) => props.src}), url(${(props) => props.onerror});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: contrast(130%);
  display: block;
  margin: 0 auto;

  width: 130px;
  height: 180px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
`;

export const SideBarContent = styled.div`
  color: white;
`;

export const SideBarTitle = styled.h3`
  text-align: center;
  color: rgba(255, 255, 255);
  text-transform: uppercase;
`;

export const SideBarTitle2 = styled.h3`
  text-align: left;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.8rem;
  text-transform: uppercase;
`;
export const ButtonOverlay = styled(Button)`
  position: absolute;
  z-index: 9999;
  bottom: 0;
  width: 100%;
  height: 50px;
  font-size: 1rem;
  letter-spacing: 12px;
  background-color: red !important;

  ${(props) =>
    props.displaysidebar === "true" &&
    css`
      display: none;
    `}
`;

export const SidebarDivide = styled.hr`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  height: 1px;
`;
export const SideBarTitleTotalPrice = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const SidebarSeats = styled.span`
  display: inline-block;
  margin: 3px;
  backdrop-filter: blur(8px) satu0rate(200%);
  -webkit-backdrop-filter: blur(8px) saturate(200%);
  background-color: rgba(255, 255, 255, 0.2);

  width: 35px;
  height: 25px;
  line-height: 25px;
  text-align: center !important;
`;

export const SidebarPayment = styled.div`
  margin: 0 auto;
  width: 100%;
  padding-top: 20px;

  color: white !important;
  & .ant-radio-inner {
    background: transparent !important;
  }
  & .ant-radio-checked::after {
    border: 1px solid white;
  }
  & .ant-radio-checked .ant-radio-inner {
    border-color: white;
  }
  & .ant-radio-inner::after {
    background: white;
  }
  & .ant-radio-wrapper:hover .ant-radio,
  .ant-radio:hover .ant-radio-inner,
  .ant-radio-input:focus + .ant-radio-inner {
    color: white;
    border-color: white;
  }

  & .ant-radio-wrapper {
    color: white;
    text-align: center;
  }
`;

export const SidebarPaymentImg = styled.img`
  width: 20%;
  margin: 5px 2px;

  filter: contrast(120%) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.4));
  &:hover {
    transform: scale(1.1);
  }
`;
