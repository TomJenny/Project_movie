// ant design css
import "antd/dist/antd.css";
import React from "react";
import ReactDOM from "react-dom";
//redux
import { Provider } from "react-redux";
import "slick-carousel/slick/slick-theme.css";
// slick react
import "slick-carousel/slick/slick.css";
//styled components
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyle from "./components/Styles/GlobalStyles";
import theme from "./components/Styles/Theme";
import { store } from "./redux/configStore";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
