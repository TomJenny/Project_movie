import { Col, Row } from "antd";
import moment from "moment";
import React, { Fragment } from "react";
import * as S from "./TabsElement";

export default function TabMenuDetailInfo(props) {
  const { filmShowTimes } = props;
  return (
    <Fragment>
      <S.TabMenuDetailContent>
        <Row>
          <Col md={12} xs={24}>
            <Row>
              <S.TabMenuDetailContentTitle>
                Opening Day:
              </S.TabMenuDetailContentTitle>
              <S.TabMenuDetailContentContent>
                {moment(filmShowTimes?.ngayKhoiChieu).format("DD/MM/YYYY")}
              </S.TabMenuDetailContentContent>
            </Row>
            <Row>
              <S.TabMenuDetailContentTitle>
                Director
              </S.TabMenuDetailContentTitle>
              <S.TabMenuDetailContentContent>
                Kim Joo-Hwan
              </S.TabMenuDetailContentContent>
            </Row>
            <Row>
              <S.TabMenuDetailContentTitle>
                Performer
              </S.TabMenuDetailContentTitle>
              <S.TabMenuDetailContentContent>
                Choi Woo Sik, Ahn Sung Ki, Park Seo Joon, Woo Do Hwan
              </S.TabMenuDetailContentContent>
            </Row>
            <Row>
              <S.TabMenuDetailContentTitle>Type </S.TabMenuDetailContentTitle>
              <S.TabMenuDetailContentContent>
                Action - Drama
              </S.TabMenuDetailContentContent>
            </Row>
            <Row>
              <S.TabMenuDetailContentTitle>Format</S.TabMenuDetailContentTitle>
              <S.TabMenuDetailContentContent>
                2D/Digital
              </S.TabMenuDetailContentContent>
            </Row>
            <Row>
              <S.TabMenuDetailContentTitle>Country</S.TabMenuDetailContentTitle>
              <S.TabMenuDetailContentContent>
                Korean
              </S.TabMenuDetailContentContent>
            </Row>
          </Col>
          <Col md={12}>
            <Row>
              <S.TabMenuDetailContentTitle>Content</S.TabMenuDetailContentTitle>
            </Row>

            <Row>
              <S.TabMenuDetailContentContent maxWidth="100%">
                {filmShowTimes?.moTa}
              </S.TabMenuDetailContentContent>
            </Row>
          </Col>
        </Row>
        <Row>
          <S.TabMenuDetailContentRelateNews>
            Related News
          </S.TabMenuDetailContentRelateNews>
        </Row>
      </S.TabMenuDetailContent>
    </Fragment>
  );
}
