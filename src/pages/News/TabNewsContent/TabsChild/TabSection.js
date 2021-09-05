import { Col, Row } from "antd";
import React, { Fragment } from "react";
import TabItem from "./TabItem";

export default function TabSection(props) {
  const { arrayNews, pages } = props;
  let beginArrayNews = (pages + 1) * 8 - 8;
  let endArrayNews = (pages + 1) * 8;
  const arrNews = arrayNews?.slice(beginArrayNews, endArrayNews);

  return (
    <Fragment>
      <Row>
        <Col sm={{ span: 12 }}>
          <TabItem item={arrNews[0]} />
        </Col>
        <Col sm={{ span: 12 }}>
          <TabItem item={arrNews[1]} />
        </Col>
      </Row>
      <Row>
        <Col sm={{ span: 16 }}>
          <Row>
            <Col sm={{ span: 12 }}>
              <TabItem item={arrNews[2]} />
            </Col>
            <Col sm={{ span: 12 }}>
              <TabItem item={arrNews[3]} />
            </Col>
          </Row>
        </Col>
        <Col sm={{ span: 8 }}>
          <Row>
            <TabItem item={arrNews[4]} small="true" />
          </Row>
          <Row>
            <TabItem item={arrNews[5]} small="true" />
          </Row>
          <Row>
            <TabItem item={arrNews[6]} small="true" />
          </Row>
          <Row>
            <TabItem item={arrNews[7]} small="true" />
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
}
