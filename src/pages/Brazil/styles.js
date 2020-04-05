import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  h3 {
    margin-top: 50px;
    text-align: center;
    color: black;
  }

  p {
    color: black;
  }

  .lastUpdate {
    color: black;
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

  img {
    width: 50px;
    height: auto;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-left: 15px;
    }
  }
`;

export const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  text-align: center;
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
    color: black;
  }

  p {
    font-weight: bold;
    color: #1a7d1f;
    font-size: 2rem;
  }
`;

export const ContentSection = styled.div`
  h1 {
    font-size: 6.1rem;
    color: black;
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
