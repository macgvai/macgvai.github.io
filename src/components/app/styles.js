import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html {
    height: 100%;
  }

  body,
  html {
    margin: 0;
  }

  body {
    padding-left: calc(100vw - 100%);
    position: relative;
    min-height: 100%;
    font-family: "Roboto", "Arial", sans-serif;
    font-size: 22px;
    line-height: 27px;
    font-weight: 400;
    color: #333333;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
}
`;
