import { createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`
  button {
    display: inline-block;
    border: none;
    text-decoration: none;
    cursor: pointer;
    appearance: none;
  }

  button:focus {
    outline: none;
  }
`;
