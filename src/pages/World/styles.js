import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  align-items: center;
  display: block;
  margin: auto;

  h3 {
    margin-top: 50px;
    text-align: center;
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
`;

export const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  list-style: none;

  text-align: center;

  align-items: center;
  justify-content: space-between;
`;
export const GlobalCount = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 50px;
  text-align: center;

  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 10rem;
    color: black;
  }
  p {
    font-weight: bold;
    color: black;
  }
`;

export const ContentSection = styled.div`
  h1 {
    font-size: 5.5rem;
    color: black;
  }

  p {
    font-weight: bold;
    color: black;
  }
`;
