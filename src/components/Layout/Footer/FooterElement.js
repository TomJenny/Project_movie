import { Link } from "react-router-dom";
import { down } from "styled-breakpoints";
import styled from "styled-components";
export const FooterContainer = styled.footer`
  background-color: rgba(0, 0, 0, 0.5);

  padding: 20px !important;
  color: #949494;
  text-align: center;

  &&& ul {
    list-style-type: none;
    padding: 0;
    & li {
      margin-bottom: 20px;
    }
  }
`;

export const FooterTitle = styled.h5`
  color: white;
  font-size: 0.9rem;
  text-align: center;
  text-transform: uppercase;
  &: {
    text-align: left;
  }
`;

export const FooterLinkMovie = styled(Link)`
  display: block;
  text-align: left;
  font-size: 0.8rem;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  &:hover {
    color: white;
  }
`;

export const FooterImagePartner = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin: 8px;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const FooterDivide = styled.hr`
  background-color: #949494;
`;

export const FooterLinkApp = styled(Link)`
  display: inline-block;
  padding-right: 10px;
  font-size: 30px;
  color: rgba(255, 255, 255, 0.5);
  &:nth-child(1):hover {
    color: white;
    filter: drop-shadow(0 0 3px white);
  }
  &:nth-child(2):hover {
    color: #a4c639;
    filter: drop-shadow(0 0 2px #a4c639);
  }
`;

export const FooterLinkSocial = styled(FooterLinkApp)`
  &:nth-child(1):hover {
    color: #3b5998;
    filter: drop-shadow(0 0 2px #3b5998);
  }
  &:nth-child(2):hover {
    color: rgba(255, 0, 0, 0.8);
    filter: drop-shadow(0 0 2px rgba(255, 0, 0, 0.8));
  }
`;

export const FooterImageLogo = styled.img`
  margin: 15px 0;
  width: 70px;
  height: 70px;
  ${down("md")} {
    width: 90px;
    height: 90px;
    text-align: center;
  }
`;

export const FooterImageSignature = styled.img`
  width: 100%;
  height: auto;
  ${down("sm")} {
    width: 25%;
    height: auto;
  }
`;

export const FooterContentCompany = styled.div`
  text-align: left;
  font-size: 0.8rem;
  ${down("md")} {
    text-align: center;
  }
`;
export const FooterTitleCompany = styled.h2`
  color: white;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const FooterContainerPartner = styled.div`
  ${down("sm")} {
    display: none;
  }
`;
