import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import Spinner from '~/components/Spinner';

import { Header, HeaderCredits, Content } from './styles';

const InformationLayout = ({ children, loading }) => (
  <>
    <Header>
      <Link to="/">
        <FiArrowLeft size="4rem" />
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
  </>
);

InformationLayout.propTypes = {
  children: PropTypes.element.isRequired,
  loading: PropTypes.bool,
};

InformationLayout.defaultProps = {
  loading: false,
};

export default InformationLayout;
