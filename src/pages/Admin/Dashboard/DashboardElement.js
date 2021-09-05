import { Progress } from "antd";
import styled, { css } from "styled-components/macro";

export const DashboardContainer = styled.div``;

const dashBoardInfoCss = css`
  background: linear-gradient(
    30deg,
    ${({ theme }) => theme.colors.black1} 50%,
    ${({ theme }) => theme.colors.black3} 50%
  );
  position: relative;
  width: 100%;
  height: 160px;
  border-radius: 5px;
  text-align: right;
  padding: 20px 10px 0;
`;

export const DashBoardInfoRevenue = styled.div`
  ${dashBoardInfoCss}
`;
export const DashBoardInfoAccount = styled.div`
  ${dashBoardInfoCss}
`;
export const DashBoardInfoTicket = styled.div`
  ${dashBoardInfoCss}
`;
export const DashBoardInfoMovie = styled.div`
  ${dashBoardInfoCss};
`;
export const DashBoardTitle = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.white2}!important;

  text-align: right;
  font-size: 22px;
  margin: 0;
`;

export const DashBoardContent = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  margin: 0;

  color: ${({ theme }) => theme.colors.white}!important;
  font-size: 25px;
`;

export const DashBoardIcon = styled.div`
  position: absolute;
  top: -24px;
  left: 20px;
  width: 80px;
  height: 80px;

  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: 45px;
  ${(props) =>
    props.revenue &&
    css`
      background: linear-gradient(60deg, #f5700c, #ff9800);
    `}
  ${(props) =>
    props.ticket &&
    css`
      background: linear-gradient(60deg, #288c6c, #4ea752);
    `}
    ${(props) =>
    props.movie &&
    css`
      background: linear-gradient(60deg, red, #da3a36);
    `}
    ${(props) =>
    props.account &&
    css`
      background: linear-gradient(60deg, #029eb1, #25b1c3);
    `}
`;
export const DashboardDivider = styled.hr`
  margin: 6px 0;
  height: 2px;

  border: none;
  background: ${({ theme }) => theme.colors.black2};
`;

export const DashboardProgress = styled(Progress)`
  & .ant-progress-text {
    color: ${({ theme }) => theme.colors.white2};
  }

  &&& .ant-progress-bg {
    height: 10px !important;
    ${(props) =>
      props.revenue &&
      css`
        background: linear-gradient(60deg, #f5700c, #ff9800);
      `}
    ${(props) =>
      props.ticket &&
      css`
        background: linear-gradient(60deg, #288c6c, #4ea752);
      `}
    ${(props) =>
      props.movie &&
      css`
        background: linear-gradient(60deg, red, #da3a36);
      `}
    ${(props) =>
      props.account &&
      css`
        background: linear-gradient(60deg, #029eb1, #25b1c3);
      `}
  }
  & .ant-progress-inner {
    background-color: transparent;
  }
`;

export const DashboardStatus = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  text-align: left;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.white2};

  & span {
    & svg {
      color: ${({ theme }) => theme.colors.primary};
    }
    font-size: 0.9rem;

    color: ${({ theme }) => theme.colors.white1};
  }
`;

export const DashBoardChartContainer = styled.div`
  position: relative;
  padding-top: 40px;
  margin-top: 50px;
  width: 100%;
  height: 430px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.black1};

  ${(props) =>
    props.barchart &&
    css`
      padding: 35px 20px 10px;
    `}
`;

export const DashboardHeaderChart = styled.h1`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  border-radius: 5px;

  background: red;

  color: ${({ theme }) => theme.colors.white1};
  padding: 10px;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;
