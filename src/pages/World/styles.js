import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 7.2rem;
    text-align: center;
    color: #061a40;
  }
  span {
    font-size: 2.1rem;
    color: #0353a4;
  }
`;
