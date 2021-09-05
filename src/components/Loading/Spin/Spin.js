import { LoadingOutlined } from "@ant-design/icons";
import React from "react";
import { SpinStyled } from "./SpinElement";
export default function SpinLoading() {
  const antIcon = <LoadingOutlined style={{ fontSize: 30 }} spin />;
  return <SpinStyled tip="Loading..." indicator={antIcon}></SpinStyled>;
}
