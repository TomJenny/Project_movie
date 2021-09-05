import { Tabs } from "antd";
import { down } from "styled-breakpoints";
import styled from "styled-components";

export const TabMenuDetailFilmContainer = styled.div`
  /* max-height: 870px; */
  max-width: 870px;
  width: 100%;
  margin: 0 auto;

  transform: translateY(-70px);

  &&& .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn a,
  .ant-tabs-tab-btn:focus a,
  .ant-tabs-tab-remove:focus a,
  .ant-tabs-tab-btn:active a,
  .ant-tabs-tab-remove:active a {
    letter-spacing: 2px !important;
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.white1};
    filter: drop-shadow(0 2px 4px ${({ theme }) => theme.colors.white3});
    & span {
      display: none;
    }
  }

  ${down("md")} {
    margin-top: 70px;
  }
`;

export const TabMenuDetailFilm = styled(Tabs)`
  &&& > .ant-tabs-nav > .ant-tabs-nav-wrap > .ant-tabs-tab + .ant-tabs-tab {
    margin: 0;
  }
  ${down("xs")} {
    &&& > .ant-tabs-nav > .ant-tabs-nav-wrap > .ant-tabs-nav-list {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const TabMenuDetailContent = styled.div`
  padding: 0 15px;
  & p {
    color: white !important;
    font-size: 0.9rem;
  }
`;
export const TabMenuDetailContentTitle = styled.p`
  width: 35%;
  ${down("md")} {
    width: 40%;
  }
`;
export const TabMenuDetailContentContent = styled.p`
  width: ${(props) => (props.maxWidth ? props.maxWidth : "40%")};

  text-align: justify;
`;
export const TabMenuDetailContentRelateNews = styled.p`
  margin: 50px 0;
`;
