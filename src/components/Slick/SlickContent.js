import React from "react";
import { settings } from "./SlickSetting";
import Slider from "react-slick";
import { Container } from "../Styles/GlobalStyles";
import * as S from "./SlickElement";

import SlickItem from "./SlickItem";

export default function SlickContent(props) {
  const { arrayFilm, activeTab } = props;

  return (
    <Container>
      <Slider {...settings}>
        {arrayFilm.slice(0, 16).map((film, index) => {
          return (
            <S.SlickContainer key={index}>
              <SlickItem film={film} activeTab={activeTab} />
            </S.SlickContainer>
          );
        })}
      </Slider>
    </Container>
  );
}
