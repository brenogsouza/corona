import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    margin: auto;
  }
`;
export const Section = styled.div`
  width: 100%;
  max-width: 380px;
  margin: auto;
  h1 {
    margin: 65px 0 32px;
    font-size: 50px;
    color: #061a40;
  }

  p {
    font-size: 18px;
    color: #737380;
    line-height: 30px;
    margin-bottom: 55px;
  }
`;
export const ButtonsContainer = styled.div`
  margin-top: 55px;


  a {
    color: #061a40;
    display: flex;
    position: relative;

    align-items: center;
    justify-content: center;

    font-size: 20px;
    font-weight: bold;

    svg {
      margin-right: 5px;
    }
    &:before {
      content: '';
      position: absolute;
      width: 60%;
      height: 100%;

      border-radius: 40px;
      padding: 20px 0;
    }
  }
`;
