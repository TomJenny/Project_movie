import Form from "antd/lib/form/Form";
import { NavLink } from "react-router-dom";
import { down } from "styled-breakpoints";
import styled from "styled-components";

export const RegisterContainer = styled.div`
  overflow-y: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  width: 380px;
  height: auto;
  padding: 10px;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  /* backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px); */
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  ${down("sm")} {
    animation: none;
    top: 0;
    left: 0;
    transform: none;
    padding-top: 50px 10px 0;
    width: 100vw !important;
    height: 100vh !important;
  }
`;

export const RegisterTitle = styled.h1`
  display: block;

  color: ${({ theme }) => theme.colors.white1};
  text-align: center;
  margin: 20px;
  font-size: 2.8rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: 3px;
  text-shadow: 0 0 10px black;
  ${down("sm")} {
    margin-top: 120px;
  }
`;

export const RegisterForm = styled(Form)``;

export const RegisterNavLink = styled(NavLink)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.red1};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const RegisterFooter = styled.div`
  color: white;
  margin-top: 10px;
`;
