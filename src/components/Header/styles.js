import styled from 'styled-components';

export const Container = styled.header.attrs({
  className: 'main-header',
})`
  position: absolute;
  display: flex;
  z-index: 999;
  height: 100px;
  width: 100%;
  padding: 0 80px;

  justify-content: space-between;
  align-items: center;

  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15); */
  background-color: rgba(0, 0, 0, 0.1);

  a {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;

export const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled.span`
  margin-right: 20px;
`;

export const Input = styled.input`
  height: 60px;
  padding: 0 40px;

  color: #000;
  transition: width 400ms;

  width: ${(props) => (props.inSearch ? '100%' : '250px')};
`;

export const Navigation = styled.nav`
  margin: 0 15px;

  display: ${(props) => (props.active ? 'flex' : 'none')};

  ul,
  li,
  a {
    display: flex;
    height: 100%;
  }

  li {
    a {
      position: relative;
      padding: 0 10px;

      align-items: center;
      justify-content: center;

      &:before {
        content: '';
        position: absolute;
        width: 0%;
        height: 3px;
        bottom: 0;
        background-color: #b9d6f2;
        transition: width 400ms;
      }

      &:hover:before {
        width: 100%;
      }
    }
  }
`;
