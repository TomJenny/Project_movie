import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import {
  LoginTemplateBackgroundOverlay,
  LoginTemplateContainer,
} from "./LoginTemplateElement";

export default function LoginTemplate(props) {
  return (
    <Route
      path={props.path}
      exact
      render={(propsRoute) => {
        return (
          <Fragment>
            <LoginTemplateContainer isRegister={props.isRegister}>
              <Logo isTemplate={"true"} />
              <LoginTemplateBackgroundOverlay />
              <props.component {...propsRoute} isRegister={props.isRegister} />
            </LoginTemplateContainer>
          </Fragment>
        );
      }}
    />
  );
}
