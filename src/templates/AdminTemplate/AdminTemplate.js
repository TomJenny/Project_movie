import {
  DownOutlined,
  FileOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import _ from "lodash";
import { Fragment, useState } from "react";
import { BsCalendar } from "react-icons/bs";
import { GiFilmStrip } from "react-icons/gi";
import { GoDashboard } from "react-icons/go";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { NavLink } from "react-router-dom";
import { history } from "../../App";
import {
  DropdownHeader,
  HeaderLoginButton,
  HeaderUserAvatar,
} from "../../components/Layout/Header/HeaderElement";
import { PUBLIC_URL, USER_LOGIN } from "../../utils/setting";
import * as S from "./AdminTemplateElement";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function AdminTemplate(props) {
  const { Component, ...restProps } = props;
  const { userLogin } = useSelector((state) => state.UserReducer);

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  if (!localStorage.getItem(USER_LOGIN)) {
    alert("You don't have the right to access this Page !");
    return <Redirect to="/" />;
  }

  if (userLogin.maLoaiNguoiDung !== "QuanTri") {
    alert("You don't have the right to access this Page !");
    return <Redirect to="/" />;
  }
  const handleMenuClick = (e) => {
    if (e.key === "1") {
      history.push("/userprofile");
    }
    if (e.key === "2") {
      localStorage.clear();
      history.push("/home");
      window.location.reload();
    }
  };
  const renderMenuDropDown = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        User Profile
      </Menu.Item>
      <Menu.Item key="2" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );
  const operations = (
    <Fragment>
      {!_.isEmpty(userLogin) ? (
        <Fragment>
          <DropdownHeader
            overlay={renderMenuDropDown}
            trigger={["click"]}
            overlayStyle={{ zIndex: 999999 }}
          >
            <HeaderLoginButton islogin="true">
              <HeaderUserAvatar
                src={PUBLIC_URL + "/img/Charactor.svg"}
                alt="avatar"
              />
              {userLogin.taiKhoan} <DownOutlined />
            </HeaderLoginButton>
          </DropdownHeader>
        </Fragment>
      ) : null}
    </Fragment>
  );

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <S.AdminTemplateContainer>
            <Layout style={{ minHeight: "100vh" }}>
              <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={onCollapse}
                width={250}
              >
                <NavLink to={{ pathname: "/home", state: { reload: true } }}>
                  <S.AdminTemplateLogo
                    src={PUBLIC_URL + "/img/logo.svg"}
                    alt="logo"
                  />
                </NavLink>
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                  <SubMenu key="1" icon={<GoDashboard />} title="Dashboard">
                    <Menu.Item key="11" icon={<GoDashboard />}>
                      <NavLink to="/admin">Dashboard</NavLink>
                    </Menu.Item>
                    {/* <Menu.Item key="12" icon={<FileOutlined />}>
                      <NavLink to="/admin">Add User</NavLink>
                    </Menu.Item> */}
                  </SubMenu>
                  <SubMenu
                    key="2"
                    icon={<UserOutlined />}
                    title="Management User"
                  >
                    <Menu.Item key="21" icon={<FileOutlined />}>
                      <NavLink to="/admin/users">Users</NavLink>
                    </Menu.Item>
                    <Menu.Item key="22" icon={<FileOutlined />}>
                      <NavLink to="/admin/users/addnew">Add User</NavLink>
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="3"
                    icon={<GiFilmStrip />}
                    title="Management Films"
                  >
                    <Menu.Item key="31" icon={<FileOutlined />}>
                      <NavLink to="/admin/films">Films</NavLink>
                    </Menu.Item>
                    <Menu.Item key="32" icon={<FileOutlined />}>
                      <NavLink to="/admin/films/addnew">Add Film</NavLink>
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="4"
                    icon={<BsCalendar />}
                    title="Management ShowTime"
                  >
                    <Menu.Item key="41" icon={<BsCalendar />}>
                      <NavLink to="/admin/showtimes">Showtime</NavLink>
                    </Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout className="site-layout">
                <Header
                  className="site-layout-background"
                  style={{
                    padding: "0 15px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <S.AdminTemplateWelcome>
                    WELCOME TO DASHBOARD {userLogin.hoTen}
                  </S.AdminTemplateWelcome>
                  <div>{operations}</div>
                </Header>
                <Content style={{ margin: "0 16px" }}>
                  <Breadcrumb style={{ margin: "16px 0" }}>
                    {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                  </Breadcrumb>
                  <div
                    className="site-layout-background"
                    style={{ padding: 24, minHeight: 360 }}
                  >
                    <Component {...propsRoute} />
                  </div>
                </Content>
                <Footer style={{ textAlign: "center", color: "white" }}>
                  Project Cinema Created by Quach Trung Tin
                </Footer>
              </Layout>
            </Layout>
          </S.AdminTemplateContainer>
        );
      }}
    />
  );
}
