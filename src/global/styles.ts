import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  body {
    margin: 0;
    font-family: 'Roboto';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

    button {
      text-transform: none !important
    }


  .title {
    font-size: 36.63px;
    font-weight: 500;
  }

  .subtitle {
    font-size: 29.3px;
    font-weight: 500;
  }

  .texto5 {
    font-size: 23.44px;
    font-weight: 500;
  }

  .texto4 {
    font-size: 18.75px;
    font-weight: 500;
  }

  .texto3 {
    font-size: 15px;
    font-weight: 500;
  }

  .texto2 {
    font-size: 12px;
    font-weight: 500;
  }

  .texto1 {
    font-size: 10px;
    font-weight: 500;
  }

  .titleExtraBold {
    font-size: 36.63px;
    font-weight: 800;
  }

  .subtitleExtraBold {
    font-size: 29.3px;
    font-weight: 800;
  }

  .texto5ExtraBold{
    font-size: 23.44px;
    font-weight: 800;
  }

  .texto4ExtraBold {
    font-size: 18.75px;
    font-weight: 800;
  }
}
`;
