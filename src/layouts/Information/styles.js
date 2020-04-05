import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;

  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  display: flex;
  height: 80px;
  padding: 0 40px;
  align-items: center;
  background-color: #0353a4;

  * {
    color: #fff;
  }
`;

export const HeaderCredits = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 1.8rem;
  align-items: center;
  justify-content: center;

  span {
    padding: 6px 10px;
    border-radius: 6px;
    background-color: #006daa;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
  }
`;

export const Content = styled.main`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;
