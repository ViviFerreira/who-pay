import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        height: 100%;
    }
    a {
        text-decoration: none;
    }

    p {
    margin: 0;
  }
`;
