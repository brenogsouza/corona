import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  height: 100vh;
  margin: 0 auto;

  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  max-width: 500px;

  h1 {
    font-size: 5rem;
    color: #061a40;
  }

  p {
    margin-top: 20px;
    line-height: 3rem;
    font-size: 2.2rem;
    color: #737380;

    a {
      opacity: 0.9;
      color: #061a40;
      border-bottom: 1px solid #061a40;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const BackButton = styled.div`
  margin-top: 20px;

  a {
    opacity: 0.8;
    vertical-align: bottom;
    font-size: 2rem;
    font-weight: bold;
    color: #8a8889;

    svg {
      vertical-align: middle;
      margin-right: 6px;
    }

    &:hover {
      opacity: 1;
    }
  }
`;

export const Image = styled.img`
  width: 400px;
  height: auto;
`;
