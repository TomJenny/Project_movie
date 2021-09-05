import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import HeaderComponent from "../../components/Layout/Header/Header";
import {
  UserProfileBackgroundOverlay,
  UserProfileContainer,
} from "./UserProfileTemplateElement";

export default function UserProfileTemplate(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Route
      path={props.path}
      exact
      render={(propsRoute) => {
        return (
          <UserProfileContainer>
            <UserProfileBackgroundOverlay />
            <HeaderComponent isuserprofile="true" />
            <props.component {...propsRoute} />
          </UserProfileContainer>
        );
      }}
    />
  );
}
