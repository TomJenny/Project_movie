import { down } from "styled-breakpoints";
import styled from "styled-components";
import { GlassEffect } from "../../../components/Styles/mixin";

export const CheckoutFooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99999;
  width: 100%;
  height: 60px;
  background: white;
  display: none;

  ${GlassEffect({ trans: "0.2", blur: "2.5px", radius: "none" })}

  ${down("sm")} {
    display: block;
  }
`;

export const FooterCheckoutSeats = styled.div`
  width: 100%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  color: white !important;
  font-size: 16px;
`;

export const FooterCheckoutTotal = styled.span`
  margin-left: 20px;
`;

export const FooterCheckoutButton = styled.a`
  display: inline-block;
  width: 100%;
  height: 60px;
  background: red;

  color: white;
  text-align: center;
  line-height: 60px;

  &:active,
  &:focus {
    color: white;
  }
`;
