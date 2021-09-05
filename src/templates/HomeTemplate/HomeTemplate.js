import React, { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";
import FooterComponent from "../../components/Layout/Footer/Footer";
import HeaderComponent from "../../components/Layout/Header/Header";

export default function HomeTemplate(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Route
      path={props.path}
      exact
      render={(propsRoute) => {
        return (
          <Fragment>
            <HeaderComponent />
            <props.component {...propsRoute} />
            <FooterComponent />
          </Fragment>
        );
      }}
    />
  );
}
