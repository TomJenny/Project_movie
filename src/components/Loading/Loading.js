import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { PUBLIC_URL } from "../../utils/setting";
import { Loader, LoadingContainer, LoadingImg } from "./LoadingElement";

export default function Loading() {
  const { isLoading } = useSelector((state) => state.LoadingReducer);

  return (
    <Fragment>
      {isLoading ? (
        <LoadingContainer>
          <Loader />
          <LoadingImg src={PUBLIC_URL + "/img/logo2.svg"} />
        </LoadingContainer>
      ) : null}
    </Fragment>
  );
}
