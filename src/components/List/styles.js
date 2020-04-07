import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  text-align: center;
  color: #000;
`;

export const Header = styled.div`
  width: 100%;
  padding: 0 30px;

  h1 {
    font-size: 5rem;
    color: #727573;
  }

  p {
    margin-top: 6px;
    font-size: 1.5rem;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-left: 15px;
      width: 5rem;
      height: auto;
    }
  }

  @media (max-width: 612px) {
    span {
      flex-direction: column;

      img {
        margin: 0;
        margin-top: 6px;
      }
    }
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 20px 0;
`;

export const FlexItem = styled.div`
  margin: 20px 40px;

  strong {
    font-size: 6rem;
    font-weight: bold;
  }

  p {
    font-size: 2rem;
    font-weight: bold;
  }

  :first-child {
    width: 100%;

    strong {
      font-size: 10rem;
    }
  }
`;
