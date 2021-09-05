import { Col, Row } from "antd";
import React from "react";
import Slider from "react-slick";
import { Container } from "../../../components/Styles/GlobalStyles";
import { PUBLIC_URL } from "../../../utils/setting";
import * as S from "./AppElement";
import settings from "./SlickSettings";
export default function HomeApp(props) {
  return (
    <S.HomeAppContainer>
      <Container>
        <S.HomeAppBackgroundOverlay />
        <Row justify="center">
          <Col md={{ span: "12" }}>
            <S.HomeAppContentLeft>
              <S.HomeAppContentLeftTitle>
                the best application for booking movie tickets online
              </S.HomeAppContentLeftTitle>
              <S.HomeAppContentLeftText>
                Not only booking tickets, you can also comment on movies, score
                theaters and redeem attractive gifts.
              </S.HomeAppContentLeftText>
              <S.HomeAppContentLeftButton type={"primary"} danger>
                App Free - Download Now!
              </S.HomeAppContentLeftButton>
            </S.HomeAppContentLeft>
          </Col>
          <Col md={{ span: "12" }}>
            <S.HomeAppContentRight>
              <S.HomeAppSLickPhone
                src={PUBLIC_URL + "/img/App/mobile.png"}
                alt="..."
              />
              <S.HomeAppSlider>
                <Slider {...settings}>
                  {Array.from(Array(11).keys()).map((index) => {
                    return (
                      <S.HomeAppSlickImg
                        key={index}
                        src={
                          PUBLIC_URL +
                          "/img/App/slide" +
                          `${index + 1}` +
                          ".jpg"
                        }
                      />
                    );
                  })}
                </Slider>
              </S.HomeAppSlider>
            </S.HomeAppContentRight>
          </Col>
        </Row>
      </Container>
    </S.HomeAppContainer>
  );
}
