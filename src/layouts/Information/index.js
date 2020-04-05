import PropTypes from 'prop-types';
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Spinner from '~/components/Spinner';

import { Container, Header, HeaderCredits, Content } from './styles';

const InformationLayout = ({ children, loading }) => (
  <Container>
    <Header>
      <Link to="/">
        <FiArrowLeft size={40} />
      </Link>

      <HeaderCredits>
        <strong>
          Powred by{' '}
          <span>
            <a
              href="https://discord.gg/wbVrB2S"
              rel="noopener noreferrer"
              target="_blank"
            >
              SweetCode
            </a>
          </span>
        </strong>
      </HeaderCredits>
    </Header>

    <Content>{loading ? <Spinner /> : children}</Content>
  </Container>
);

InformationLayout.propTypes = {
  children: PropTypes.element.isRequired,
  loading: PropTypes.bool,
};

InformationLayout.defaultProps = {
  loading: false,
};

export default InformationLayout;
