import React from "react";
import { PUBLIC_URL } from "../../utils/setting";
import { LogoLink } from "./LogoElement";

export default function Logo(props) {
  const { display } = props;
  return (
    <LogoLink to="/home" display={display}>
      <img src={PUBLIC_URL + "/img/logo2.svg"} alt="logo" />
    </LogoLink>
  );
}
