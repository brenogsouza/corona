import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 40px auto;

  h3 {
    margin-top: 50px;
    text-align: center;
  }

  .lastUpdate {
    color: #000;
  }
`;

export const HeaderSection = styled.div`
  width: 100%;
  padding: 0 30px;
  margin-bottom: 45px;
  text-align: center;

  h1 {
    font-size: 5.5rem;
    color: #727573;
  }

  p {
    color: #000;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-left: 15px;
      width: 50px;
      height: auto;
    }
  }

  @media (max-width: 612px) {
    p {
      margin-top: 10px;
    }

    span {
      flex-direction: column;
    }
  }
`;

export const GlobalCount = styled.div`
  width: 100%;
  margin-top: 12px;
  margin-bottom: 40px;
  text-align: center;

  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 12rem;
    color: #000;
  }

  p {
    font-weight: bold;
    color: #1a7d1f;
    font-size: 2rem;
  }
`;

export const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  text-align: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 60px;
    margin-top: 60px;
  }
`;

export const ContentSection = styled.div`
  h1 {
    font-size: 6.1rem;
    color: #000;
  }

  p {
    font-weight: bold;
    color: #f2cb05;
  }

  .deaths {
    color: #8a291e;
  }

  .suspect {
    color: #deb616;
  }

  .recovered {
    color: #1695de;
  }
`;
