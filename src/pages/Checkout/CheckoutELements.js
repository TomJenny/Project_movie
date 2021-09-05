import { Tabs } from "antd";
import { down } from "styled-breakpoints";
import styled, { css } from "styled-components";

export const CheckOutContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
export const CheckOutBackgroundOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  background: rgba(0, 0, 0, 0.4);
`;

export const CheckOutBackground = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  filter: blur(20px);
`;
export const CheckoutTabs = styled(Tabs)`
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
  padding-top: 60px;
  overflow-y: auto;

  ${down("sm")} {
    margin-bottom: 60px;
  }
  ${(props) =>
    props.displaysidebar === "true" &&
    css`
      display: none;
    `}
  color: White;

  &&& .ant-tabs-nav .ant-tabs-nav-wrap,
  &&& div > .ant-tabs-nav .ant-tabs-nav-wrap {
    width: 68vw;
    flex: none;
    justify-content: center;
  }

  &&& .ant-tabs-nav::before {
    border-bottom: none !important;
  }
`;
