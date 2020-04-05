import styled, { keyframes } from 'styled-components';

import BackgroundImage from '~/assets/img/bolha.jpg';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  background: linear-gradient(rgba(3, 83, 164, 0.3), rgba(0, 0, 0, 0.3)),
    url(${BackgroundImage}) no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  background-attachment: fixed;
`;

export const Content = styled.section`
  position: relative;
  display: flex;
  z-index: 3;
  height: 100%;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 16rem;
    font-weight: 900;
  }

  h3 {
    font-size: 4rem;
  }

  a {
    margin-top: 30px;
    padding: 15px 10px;
    border-radius: 4px;

    font-size: 1.8rem;
    font-weight: bold;
    color: #fff;
    background-color: #006daa;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
    transition: transform 200ms;

    svg {
      vertical-align: text-bottom;
      margin-right: 6px;
    }

    &:hover {
      transform: translateY(-5px);
    }
  }
`;

const waveAnimation = keyframes`
  0% {
    d: path(
      'M0,224L40,192C80,160,160,96,240,112C320,128,400,224,480,224C560,224,640,128,720,122.7C800,117,880,203,960,197.3C1040,192,1120,96,1200,74.7C1280,53,1360,107,1400,133.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
    );
  }
  50% {
    d: path(
      'M0,160L40,144C80,128,160,96,240,106.7C320,117,400,171,480,176C560,181,640,139,720,154.7C800,171,880,245,960,245.3C1040,245,1120,171,1200,160C1280,149,1360,203,1400,229.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
    );
  }
  100% {
    d: path(
      'M0,224L40,192C80,160,160,96,240,112C320,128,400,224,480,224C560,224,640,128,720,122.7C800,117,880,203,960,197.3C1040,192,1120,96,1200,74.7C1280,53,1360,107,1400,133.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
    );
  }
`;

export const Wave = styled.svg`
  position: absolute;
  z-index: 0;
  bottom: 0;

  path {
    animation: ${waveAnimation} 10s linear infinite alternate;
  }
`;
