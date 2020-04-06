import React, { useState } from 'react';
import { FiSearch, FiDownload } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import {
  Container,
  ResponsiveContainer,
  ResponsiveButton,
  Content,
  SearchContainer,
  DownloadContainer,
  Navigation,
  SearchIcon,
  Input,
} from './styles';

const HeaderComponent = () => {
  const [inSearch, setInSearch] = useState(false);
  const [navbarOpen, setnavbarOpened] = useState(false);

  const inputFocus = () => setInSearch(!inSearch);
  const handleNavigationButton = () => setnavbarOpened(!navbarOpen);

  return (
    <Container>
      <ResponsiveContainer>
        <ResponsiveButton open={navbarOpen} onClick={handleNavigationButton}>
          <span /> <span /> <span />
        </ResponsiveButton>
      </ResponsiveContainer>

      <Content open={navbarOpen}>
        <SearchContainer>
          <SearchIcon>
            <FiSearch size={30} color="#000" />
          </SearchIcon>

          <Input
            inSearch={inSearch}
            onFocus={inputFocus}
            onBlur={inputFocus}
            placeholder="Posso te ajudar ?"
          />
        </SearchContainer>

        <Navigation active={!inSearch}>
          <ul>
            <li>
              <Link to="/world">Mundo</Link>
            </li>
            <li>
              <Link to="/brazil">Brasil</Link>
            </li>
            <li>
              <Link to="/news">Notícias</Link>
            </li>
          </ul>
        </Navigation>

        <DownloadContainer>
          <Link to="/download">
            Download App
            <FiDownload size={20} />
          </Link>
        </DownloadContainer>
      </Content>
    </Container>
  );
};

export default HeaderComponent;
