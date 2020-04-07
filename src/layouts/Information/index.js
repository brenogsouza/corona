import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import Spinner from '~/components/Spinner';

import { Header, HeaderCredits, Content } from './styles';

const InformationLayout = ({ children, loading }) => {
  const history = useHistory();

  const paths = history.location.pathname.split(/\//g);

  return (
    <>
      <Header>
        <button
          type="button"
          onClick={() => history.push(paths[paths.length - 2])}
        >
          <FiArrowLeft size="4rem" />
        </button>

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
};

InformationLayout.propTypes = {
  children: PropTypes.element.isRequired,
  loading: PropTypes.bool,
};

InformationLayout.defaultProps = {
  loading: false,
};

export default InformationLayout;
