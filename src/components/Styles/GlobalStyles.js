import styled, { createGlobalStyle } from "styled-components/macro";
import { PUBLIC_URL } from "../../utils/setting";

const GlobalStyle = createGlobalStyle`

  html,body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "roboto", Roboto, Arial, sans-serif;
 }

 body{
    font-size: 15px;
    background: url(${PUBLIC_URL}  '/img/galaxy3.jpg');
    background-size:contain;
    
    color:${({ theme }) => theme.colors.white1};

     .ant-cascader-menus li.ant-cascader-menu-item {
     color:black;
 }
 

`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 940px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
`;

export default GlobalStyle;
