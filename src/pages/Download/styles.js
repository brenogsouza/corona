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
  }
  section .Link {
    color: black;
  }
`;
