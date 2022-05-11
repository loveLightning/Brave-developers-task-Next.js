import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'roboto';
        background-color: #f5f5f5;
    }
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    a {
      text-decoration: none;
    }

    input {
      height: 35px;
      padding-left: 10px;
      outline: none;
      border: 2px solid darkgrey;
      transition: 0.4s ease all;
    }

    input:focus {
      border: 2px solid #424040;
    }
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
