import { Button } from "antd";
import Sider from "antd/lib/layout/Sider";
import styled from "styled-components/macro";

export const AdminTemplateContainer = styled.div`
  color: ${({ theme }) => theme.colors.white}!important;
  &&& .ant-layout-sider,
  &&& .ant-layout-header {
    background: ${({ theme }) => theme.colors.black1};
  }

  &&& .ant-menu-dark .ant-menu-inline.ant-menu-sub {
    background: ${({ theme }) => theme.colors.black1};
  }

  & .ant-menu.ant-menu-dark,
  .ant-menu-dark .ant-menu-sub,
  & .ant-menu.ant-menu-dark .ant-menu-sub,
  &&& .ant-layout-sider-trigger {
    background: ${({ theme }) => theme.colors.black3};
  }
  &&&
    .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal)
    .ant-menu-item-selected {
    background: ${({ theme }) => theme.colors.primary};
  }

  &&& .ant-layout .site-layout,
  &&& .ant-layout-footer {
    background: ${({ theme }) => theme.colors.secondary};
  }

  &&& .ant-layout-sider-children {
    overflow-x: hidden;
  }
`;
export const AdminTemplateLogo = styled.img`
  display: block;
  max-width: 220px;
  height: 65px;
  margin: auto;
  padding: 0 10px;
`;

export const AdminTemplateButtonUser = styled(Button)`
  width: 50;
  height: 50;
  margin-left: 20px;
`;

export const AdminTemplateWelcome = styled.h1`
  color: white;
  text-transform: uppercase;
`;

export const AdminTemplateSidebar = styled(Sider)``;
