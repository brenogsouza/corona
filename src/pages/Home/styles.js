import styled from 'styled-components';

import BackgroundImage from '../../assets/img/bg2.jpg';

export const Container = styled.section`
  height: 100vh;
  width: 100%;

  text-align: center;

  background: linear-gradient(rgba(255, 255, 255, 0.1), rgb(0, 0, 0)),
    url(${BackgroundImage}) no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  background-attachment: fixed;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 5.6rem;
    text-align: center;
  }

  span {
    color: #ed3124;
    font-weight: bold;
    font-size: 2.5rem;
    color: #b9d6f2;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 55px;

  a {
    display: flex;
    position: relative;
    z-index: 2;

    align-items: center;
    justify-content: center;

    font-size: 2.2rem;
    font-weight: 600;

    svg {
      margin-left: 6px;
    }

    &:before {
      content: '';
      position: absolute;
      z-index: -1;
      width: 40%;
      height: 100%;
      top: 50%;
      left: -20px;

      transform: translateY(-50%);
      padding: 20px 0;
      border-radius: 40px;
      background-color: #0353a4;
      transition: width 300ms;
    }

    &:hover:before {
      width: calc(100% + 40px);
    }
  }
`;
