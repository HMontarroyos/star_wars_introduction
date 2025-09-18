import { createGlobalStyle } from "styled-components";
import Starjout from "../assets/fonts/Starjout.ttf";

export const GlobalStyle = createGlobalStyle<any>`
  @font-face {
    font-family: 'Starjout';
    src: url(${Starjout}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    border: 0;
    padding: 0;
    margin: 0;
    cursor: none;
  }

  body {
    background-color: #000000;
    font-family: 'Exo', sans-serif;
  }
`;
