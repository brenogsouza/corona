import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiDownload } from 'react-icons/fi';

import {
  Container,
  ResponsiveContainer,
  ResponsiveButton,
  Content,
  DownloadContainer,
  Navigation,
} from './styles';

const HeaderComponent = () => {
  const [navbarOpen, setnavbarOpened] = useState(false);

  const handleNavigationButton = () => setnavbarOpened(!navbarOpen);

  return (
    <Container>
      <ResponsiveContainer>
        <ResponsiveButton open={navbarOpen} onClick={handleNavigationButton}>
          <span /> <span /> <span />
        </ResponsiveButton>
      </ResponsiveContainer>

      <Content open={navbarOpen}>
        <Navigation>
          <ul>
            <li>
              <Link to="/world">Mundo</Link>
            </li>
            <li>
              <Link to="/brazil">Brasil</Link>
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
