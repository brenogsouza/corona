import { createGlobalStyle } from 'styled-components';

import '~/assets/css/normalize.css';

export default createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font: 1.6rem 'Montserrat', sans-serif;
    color: #fff;
    background-color: #f0f0f5;
  }

  @media (max-width: 1024px) {
    html {
      font-size: 50%;
    }
  }

  @media (max-width: 612px) {
   html {
    font-size: 40%;
   }
  }
`;
