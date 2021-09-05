import React from "react";
import { Result, Button } from "antd";
import "antd/dist/antd.css";
import { PageNotFoundContainer } from "./PageNotFoundELement";

export default function PageNotFound() {
  return (
    <PageNotFoundContainer>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" danger href="/">
            Back Home
          </Button>
        }
      />
    </PageNotFoundContainer>
  );
}
