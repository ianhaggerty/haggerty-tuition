import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    /* This defines what 1rem is */
    font-size: 62.5%; // 1 rem == 10px;
  }

  body {
    font-family: museo-sans-rounded, sans-serif;
    font-weight: 300;
    font-style: normal;
    line-height: 1.7;
    color: ${props => props.theme.colorGreyDark};
    box-sizing: border-box;
    overflow-x: hidden;
  }

  ::selection {
    background-color: ${props => props.theme.colorPrimary};
    color: ${props => props.theme.colorWhitePure};
  }
`;
