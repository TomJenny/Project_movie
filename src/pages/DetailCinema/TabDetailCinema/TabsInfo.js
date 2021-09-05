import { Col, Row } from "antd";
import React, { Fragment } from "react";
import * as S from "./TabsElement";

export default function DetailCinemaInfo(props) {
  const { cinemaBranch } = props;
  return (
    <Fragment>
      <S.TabMenuDetailContent>
        <Row>
          <Col md={12} xs={24}>
            <Row>
              <S.TabMenuDetailContentTitle>
                Location
              </S.TabMenuDetailContentTitle>
              <S.TabMenuDetailContentContent>
                {cinemaBranch.diaChi}
              </S.TabMenuDetailContentContent>
            </Row>
            <Row>
              <S.TabMenuDetailContentTitle>
                Phone number
              </S.TabMenuDetailContentTitle>
              <S.TabMenuDetailContentContent>
                028 62 670 670
              </S.TabMenuDetailContentContent>
            </Row>
            <Row>
              <S.TabMenuDetailContentTitle>Email</S.TabMenuDetailContentTitle>
              <S.TabMenuDetailContentContent>
                info@bhdstar.vn
              </S.TabMenuDetailContentContent>
            </Row>
            <Row>
              <S.TabMenuDetailContentTitle>Theater</S.TabMenuDetailContentTitle>
              <S.TabMenuDetailContentContent>
                7 2D. 4 3D
              </S.TabMenuDetailContentContent>
            </Row>
            <Row>
              <S.TabMenuDetailContentTitle>
                Open Time
              </S.TabMenuDetailContentTitle>
              <S.TabMenuDetailContentContent>
                8:00 - 24:00
              </S.TabMenuDetailContentContent>
            </Row>
          </Col>
          <Col md={12}>
            <Row>
              <S.TabMenuDetailContentTitle>
                Introduction
              </S.TabMenuDetailContentTitle>
            </Row>

            <Row>
              <S.TabMenuDetailContentContent maxWidth="100%">
                {cinemaBranch.tenCumRap} là một trong những cụm rạp được đầu tư
                quy mô nhất hiện nay tại Việt Nam, với tổng diện tích hơn 2.000
                m2, bao gồm 7 phòng chiếu được trang bị theo tiêu chuẩn quốc tế.
                Âm thanh đạt chuẩn Dolby 7.1 với hệ thống cách âm hiện đại,
                trong đó có 4 phòng 3D, cùng hơn 1.000 ghế ngồi được thiết kế
                theo kiểu dáng đẹp mắt và tiện dụng để mang lại sự thoải mái
                nhất cho khán giả.
              </S.TabMenuDetailContentContent>
            </Row>
          </Col>
        </Row>
      </S.TabMenuDetailContent>
    </Fragment>
  );
}
