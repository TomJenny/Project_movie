import { DownOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, Row, Steps } from "antd";
import React, { useState } from "react";
import { GoDashboard } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../../App";
import { PUBLIC_URL } from "../../../utils/setting";
import { useBreakpoints } from "../../Styles/ResponsiveBreakpoints";
import * as S from "./HeaderElement";

const { Step } = Steps;
export default function HeaderComponent(props) {
  const dispatch = useDispatch();
  const { ischeckout, isuserprofile } = props;
  const { userLogin } = useSelector((state) => state.UserReducer);
  const [buttonToggleStatus, setbuttonToggleStatus] = useState("");
  const { tabActive } = useSelector((state) => state.BoxOfficeReducer);
  const responsive = useBreakpoints();

  const handleButtonToggle = () => {
    buttonToggleStatus === ""
      ? setbuttonToggleStatus("active")
      : setbuttonToggleStatus("");
  };

  const handleMenuClick = (e) => {
    if (e.key === "10") {
      localStorage.clear();
      window.location.reload();
    }
    if (e.key === "12") {
      history.push("/admin");
    }
    if (e.key === "11") {
      history.push("/userprofile");
    }
  };

  // render menu drop down of user button
  const renderMenuDropDown = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="11" icon={<UserOutlined />}>
        User Profile
      </Menu.Item>
      {userLogin.maLoaiNguoiDung === "QuanTri" ? (
        <Menu.Item key="12" icon={<UserOutlined />}>
          DashBoard
        </Menu.Item>
      ) : null}
      <Menu.Item key="10" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <S.HeaderContainer
      buttontogglestatus={buttonToggleStatus}
      ischeckout={ischeckout}
      isuserprofile={isuserprofile}
      tabactive={tabActive}
    >
      <Row justify="space-between" align="middle">
        <S.HeaderLogo to="/">
          {responsive.isSm || (responsive.isMd && ischeckout === "true") ? (
            <img src={PUBLIC_URL + "/img/logo3.svg"} alt="logo" />
          ) : (
            <img src={PUBLIC_URL + "/img/logo.svg"} alt="logo" />
          )}
        </S.HeaderLogo>
        <S.HeaderMenu
          theme="light"
          mode={responsive.isSm ? "inline" : "horizontal"}
          buttontogglestatus={buttonToggleStatus}
          ischeckout={ischeckout}
          isuserprofile={isuserprofile}
        >
          <S.HeaderMenuItem key="1">
            <S.HeaderMainMenu
              to="ShowTimes"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => handleButtonToggle()}
            >
              SHOWTIMES
            </S.HeaderMainMenu>
          </S.HeaderMenuItem>
          {!responsive.isXs ? (
            <S.HeaderMenuItem key="2">
              <S.HeaderMainMenu
                to="MovieTicket"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => handleButtonToggle()}
              >
                TICKET
              </S.HeaderMainMenu>
            </S.HeaderMenuItem>
          ) : null}
          <S.HeaderMenuItem key="3">
            <S.HeaderMainMenu
              to="Cineplex"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => handleButtonToggle()}
            >
              CINEPLEX
            </S.HeaderMainMenu>
          </S.HeaderMenuItem>
          <S.HeaderMenuItem key="4">
            <S.HeaderMainMenu
              to="News"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => handleButtonToggle()}
            >
              NEWS
            </S.HeaderMainMenu>
          </S.HeaderMenuItem>
          <S.HeaderMenuItem key="5">
            <S.HeaderMainMenu
              to="Apps"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => handleButtonToggle()}
            >
              APPS
            </S.HeaderMainMenu>
          </S.HeaderMenuItem>

          {responsive.isSm ? (
            <>
              <S.HeaderMenuItem key="7">
                <S.HeaderMenuLink to="/register">SIGN IN</S.HeaderMenuLink>
              </S.HeaderMenuItem>
              {userLogin.taiKhoan ? (
                <>
                  <S.HeaderMenuItem
                    key="8"
                    icon={<UserOutlined style={{ color: "white" }} />}
                  >
                    <S.HeaderMenuLink to="/userprofile">
                      USER PROFILE
                    </S.HeaderMenuLink>
                  </S.HeaderMenuItem>
                  {userLogin.maLoaiNguoiDung === "QuanTri" ? (
                    <S.HeaderMenuItem key="9">
                      <S.HeaderMenuLink to="/admin">
                        <GoDashboard
                          style={{ color: "white", marginRight: "10px" }}
                        />{" "}
                        DASH BOARD
                      </S.HeaderMenuLink>
                    </S.HeaderMenuItem>
                  ) : null}
                  <S.HeaderMenuItem
                    key="6"
                    icon={<LogoutOutlined style={{ color: "white" }} />}
                  >
                    <S.HeaderMenuLink
                      to="/"
                      onClick={() => {
                        handleMenuClick({ key: "10" });
                      }}
                    >
                      LOG OUT
                    </S.HeaderMenuLink>
                  </S.HeaderMenuItem>
                </>
              ) : (
                <S.HeaderMenuItem key="11">
                  <S.HeaderMenuLink to="/login">USER LOGIN</S.HeaderMenuLink>
                </S.HeaderMenuItem>
              )}
            </>
          ) : null}
        </S.HeaderMenu>
        {ischeckout === "true" && (
          <S.CheckoutSteps size="small">
            <Steps current={tabActive === "1" ? 0 : 1}>
              <Step title="Book Ticket" />
              <Step title="Finish" />
            </Steps>
          </S.CheckoutSteps>
        )}
        <Row justify="center" align="middle">
          {responsive.isSm || ischeckout === "true" ? null : (
            <S.HeaderRegisterButton
              type="primary"
              shape="circle"
              icon={<UserOutlined />}
              danger
              size="medium"
              href="/register"
            />
          )}
          {!responsive.isSm || ischeckout === "true" ? (
            userLogin.taiKhoan ? (
              <S.DropdownHeader
                overlay={renderMenuDropDown}
                trigger={["click"]}
                overlayStyle={{ zIndex: 999999999 }}
              >
                <S.HeaderLoginButton islogin="true">
                  <S.HeaderUserAvatar
                    src={PUBLIC_URL + "/img/Charactor.svg"}
                    alt="avatar"
                  />
                  {userLogin.taiKhoan} <DownOutlined />
                </S.HeaderLoginButton>
              </S.DropdownHeader>
            ) : (
              <S.HeaderLoginButton href="/login">Login</S.HeaderLoginButton>
            )
          ) : null}
          {responsive.isSm && !(ischeckout === "true") ? (
            <S.ButtonToggle
              className={buttonToggleStatus}
              onClick={() => handleButtonToggle()}
            >
              <svg viewBox="0 0 64 48">
                <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
                <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
                <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
              </svg>
            </S.ButtonToggle>
          ) : null}
        </Row>
      </Row>
    </S.HeaderContainer>
  );
}
