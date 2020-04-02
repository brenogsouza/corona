import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiSearch, FiDownload } from 'react-icons/fi';

import {
  Container,
  SearchContainer,
  DownloadContainer,
  Navigation,
  SearchIcon,
  Input,
} from './styles';

const HeaderComponent = () => {
  const [inSearch, setInSearch] = useState(false);

  const inputFocus = () => setInSearch(!inSearch);

  return (
    <Container>
      <SearchContainer>
        <SearchIcon>
          <FiSearch size={30} />
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
            <Link to="/news">Notícias</Link>
          </li>
          <li>
            <Link to="/local">Local</Link>
          </li>
        </ul>
      </Navigation>

      <DownloadContainer>
        <Link to="/download">
          Download App
          <FiDownload size={20} color="#000" />
        </Link>
      </DownloadContainer>
    </Container>
  );
};

export default HeaderComponent;
