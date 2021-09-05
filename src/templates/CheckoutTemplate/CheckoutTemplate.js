import React, { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";
import HeaderComponent from "../../components/Layout/Header/Header";

export default function CheckoutTemplate(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <Fragment>
            <HeaderComponent ischeckout="true" />
            <props.component {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
}
