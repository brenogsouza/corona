import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  text-align: center;
`;

export const StatesContainer = styled.ul`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(2, 1fr);
  margin: 40px 0;
`;

export const StateItem = styled.li`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;

  a {
    display: flex;
    width: 100%;
    padding: 20px 10px;

    align-items: center;
    justify-content: center;

    font-size: 2rem;
    font-weight: 700;

    background-color: #061a40;
    box-shadow: 0 6px 5px 0 rgba(0, 0, 0, 0.3);
    transition: transform 200ms;

    img {
      width: 30px;
      height: auto;
      margin-left: 8px;
    }

    &:hover {
      transform: translateY(-5px);
    }
  }
`;
