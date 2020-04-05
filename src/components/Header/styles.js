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

  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25); */
  background-color: rgba(0, 0, 0, 0.3);

  a {
    font-size: 1.8rem;
    font-weight: 600;
    color: #fff;
  }
`;

// Search

export const SearchContainer = styled.div.attrs({
  className: 'main-header-search-container',
})`
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

  width: ${props => (props.inSearch ? '100%' : '250px')};
`;

// Navbar Items

export const Navigation = styled.nav`
  margin: 0 15px;
  height: 100%;

  display: ${props => (props.active ? 'flex' : 'none')};

  ul,
  li,
  a {
    display: flex;
    height: 100%;
  }

  li {
    & + li {
      margin-left: 12px;
    }

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

// Download

export const DownloadContainer = styled.div`
  margin-left: 30px;

  a {
    display: flex;
    padding: 12px 20px;

    align-items: center;
    justify-content: center;

    border: 1px solid #fff;

    svg {
      margin-left: 8px;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
`;
