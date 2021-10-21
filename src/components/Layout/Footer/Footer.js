import {
  AndroidFilled,
  AppleFilled,
  FacebookFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { PUBLIC_URL } from "../../../utils/setting";
import { Container } from "../../Styles/GlobalStyles";
import * as S from "./FooterElement";

export default function FooterComponent(props) {
  const d = new Date();
  const currentYear = d.getFullYear();
  const renderLogoPartner = () => {
    return Array.from(Array(15).keys()).map((index) => {
      return (
        <Fragment key={index}>
          <Link to="https://google.com.vn">
            <S.FooterImagePartner
              src={
                PUBLIC_URL +
                "/img/IconPartner/doitac (" +
                `${index + 1}` +
                ").png"
              }
              alt="partner"
            />
          </Link>
        </Fragment>
      );
    });
  };
  return (
    <S.FooterContainer>
      <Container>
        <Row>
          <Col lg={{ span: 8 }} sm={{ span: 12 }} span={24}>
            <S.FooterTitle>Movie</S.FooterTitle>
            <Row>
              <Col span={12}>
                <ul>
                  <li>
                    <S.FooterLinkMovie to="/#">FAQ</S.FooterLinkMovie>
                  </li>
                  <li>
                    <S.FooterLinkMovie to="/#">
                      Brand GuideLines
                    </S.FooterLinkMovie>
                  </li>
                </ul>
              </Col>
              <Col span={12}>
                <ul>
                  <li>
                    <S.FooterLinkMovie to="/#">Terms of use</S.FooterLinkMovie>
                  </li>
                  <li>
                    <S.FooterLinkMovie to="/#">
                      Privacy Policy
                    </S.FooterLinkMovie>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col span={0} lg={{ span: 7 }}>
            <S.FooterContainerPartner>
              <S.FooterTitle>partner</S.FooterTitle>
              <Row justify="center">{renderLogoPartner()}</Row>
            </S.FooterContainerPartner>
          </Col>
          <Col lg={{ span: 4 }} sm={{ span: 6 }} span={12}>
            <S.FooterTitle>Mobile App</S.FooterTitle>
            <Row justify="center">
              <S.FooterLinkApp to="/#">
                <AppleFilled size="large" />
              </S.FooterLinkApp>
              <S.FooterLinkApp to="/#">
                <AndroidFilled />
              </S.FooterLinkApp>
            </Row>
          </Col>
          <Col lg={{ span: 4 }} sm={{ span: 6 }} span={12}>
            <S.FooterTitle>Social</S.FooterTitle>
            <Row justify="center">
              <S.FooterLinkSocial to="/#">
                <FacebookFilled />
              </S.FooterLinkSocial>
              <S.FooterLinkSocial to="/#">
                <TwitterSquareFilled />
              </S.FooterLinkSocial>
            </Row>
          </Col>
        </Row>
        <S.FooterDivide />
        <Row>
          <Col span={24} md={{ span: 3 }}>
            <S.FooterImageLogo
              src={PUBLIC_URL + "/img/logo2.svg"}
              style={{ width: "75px" }}
              alt="logo"
            />
          </Col>
          <Col span={24} md={{ span: 17 }}>
            <S.FooterContentCompany>
              <S.FooterTitleCompany>
                CINEMA – PRODUCTION OF EXAMPLE COMPANY
              </S.FooterTitleCompany>
              <p>
                This website is cloned for educational purposes
                <br />
                &copy; Copyright {currentYear}, Example Corporation
              </p>
            </S.FooterContentCompany>
          </Col>
          <Col span={24} md={{ span: 4 }}>
            <S.FooterImageSignature
              src={PUBLIC_URL + "/img/BoCongThuong.png "}
              alt="bocongthuong"
            />
          </Col>
        </Row>
      </Container>
    </S.FooterContainer>
  );
}
