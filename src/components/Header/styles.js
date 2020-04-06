import styled, { css } from 'styled-components';

export const Container = styled.header`
  position: absolute;
  z-index: 999;
  width: 100%;
  padding: 0 80px;

  background-color: rgba(0, 0, 0, 0.3);

  a {
    font-size: 1.8rem;
    font-weight: 600;
    color: #fff;
  }

  @media (max-width: 1024px) {
    padding: 0;
    background: transparent;
  }
`;

// rgba(0, 109, 170, 0.9)

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100px;

  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    position: absolute;
    top: 60px;
    height: calc(100vh - 60px);

    background-color: rgba(0, 109, 170, 0.9);
    flex-direction: column;
    justify-content: center;
    transition: left 300ms;

    left: ${props => (props.open ? '0' : '-100%')};
  }
`;

// Search

export const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  height: 60px;
  align-items: center;

  @media (max-width: 1024px) {
    flex: 0;
  }
`;

export const SearchIcon = styled.span`
  display: flex;
  height: 60px;
  width: 60px;

  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const Input = styled.input`
  height: 60px;
  padding-left: 10px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  transition: width 400ms;

  @media (min-width: 1025px) {
    width: ${props => (props.inSearch ? 'calc(100% - 68px)' : '250px')};

    :focus {
      box-sizing: content-box;
      border: 2px solid rgba(0, 109, 170, 0.4);
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    }
  }
`;

// Navbar Items

export const Navigation = styled.nav`
  margin: 0 15px;
  height: 100%;

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
    }
  }

  @media (min-width: 1025px) {
    display: ${props => (props.active ? 'flex' : 'none')};

    li a {
      &:hover:before {
        width: 100%;
      }
    }
  }

  @media (max-width: 1024px) {
    margin: 40px 0;

    &,
    ul,
    li,
    a {
      width: 100%;
      height: auto;
    }

    ul {
      flex-direction: column;

      li {
        margin: 0;

        a {
          padding: 20px 0;
        }
      }
    }
  }
`;

// Download Button

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

  @media (max-width: 1024px) {
    margin: 0;
  }
`;

// Responsive

export const ResponsiveContainer = styled.div`
  display: none;
  width: 100%;
  height: 60px;
  padding: 0 20px;

  align-items: center;
  background-color: rgba(0, 109, 170, 0.9);

  @media (max-width: 1024px) {
    display: flex;
  }
`;

export const ResponsiveButton = styled.button`
  span {
    display: block;
    height: 2px;
    width: 40px;
    background-color: #fff;
    transition: transform 200ms ease-out;

    & + span {
      margin-top: 10px;
    }

    ${props =>
      props.open &&
      css`
        margin: 0 !important;

        &:nth-child(1) {
          transform: rotate(45deg);
        }

        &:nth-child(2) {
          display: none;
        }

        &:nth-child(3) {
          transform: rotate(-45deg);
        }
      `}
  }
`;
