import { Tabs } from "antd";
import { down } from "styled-breakpoints";
import styled from "styled-components";
import { GlassEffect } from "../../components/Styles/mixin";

const { TabPane } = Tabs;
export const ProfileContainer = styled.div`
  padding-top: 60px;
  width: 100vw;
  height: auto;
  overflow-x: hidden;
  &&& .ant-tabs-ink-bar {
    display: none;
  }
  &&& .ant-tabs-nav::before {
    display: none;
  }
  &&& .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn a,
  .ant-tabs-tab-btn:focus a,
  .ant-tabs-tab-remove:focus a,
  .ant-tabs-tab-btn:active a,
  .ant-tabs-tab-remove:active a {
    transform: scale(1.1);
    color: white;
    letter-spacing: 2px !important;

    & span {
      display: none;
    }
  }
`;

export const ProfileTabs = styled(Tabs)`
  width: 100vw;
  height: 100%;
`;
export const ProfileTabPane = styled(TabPane)`
  width: 100vw;
  height: 100%;
`;

export const ProfileForm = styled.div`
  margin: 80px 0 0;

  /* ${GlassEffect({ Transparency: 0.3, Blur: 4 })} */
  padding: 70px 20px 10px;
  width: 100%;
  height: 100%;

  ${down("sm")} {
    margin: 0;
    padding: 0 10px;
  }
`;

export const ProfileInfoUser = styled.div`
  margin: 80px 0 0;
  width: 100%;
  height: 100%;
  color: white;
  text-align: center;
  /* ${GlassEffect({ color: "0,0,0", Transparency: 0.4, Blur: 2 })} */
`;

export const ProfileImg = styled.img`
  display: block;
  width: 150px;
  height: 150px;
  margin: 20px auto 10px;
  filter: drop-shadow(0 0 1px white) contrast(1.2);
`;

export const ProfileInfoName = styled.p`
  text-align: center;
  white-space: wrap;
  word-break: break-all;
  text-transform: uppercase;
  font-size: 1.5rem;
`;

export const ProfileInfoTicket = styled.p`
  font-size: 1.5rem;
  & svg {
    margin-right: 10px;
  }
`;
