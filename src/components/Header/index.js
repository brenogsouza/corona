import React from 'react';
import { Link } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';

import { Container, Button, Navigation } from './styles';

const HeaderComponent = () => (
  <Container>
    <Button>
      <Link to="/registrations">
        <FiSearch size={30} />
      </Link>
    </Button>
    <nav>
      <ul>
        <Navigation>
          <Link to="/">Mundo</Link>
        </Navigation>
        <Navigation>
          <Link to="/">Notícias</Link>
        </Navigation>
        <Navigation>
          <Link to="/">Local</Link>
        </Navigation>
        <Navigation>
          <Link to="/">Download</Link>
        </Navigation>
      </ul>
    </nav>
  </Container>
);

export default HeaderComponent;
