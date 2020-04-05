import { createGlobalStyle } from 'styled-components';

import '~/assets/css/normalize.css';
// import '~/assets/css/responsive.css';

export default createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font: 1.6rem 'Montserrat', sans-serif;
    color: #fff;
    background-color: #f0f0f5;
  }
`;
