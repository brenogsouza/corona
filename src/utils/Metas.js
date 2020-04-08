import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

export const HomeMeta = () => (
  <Helmet>
    <meta name="robots" content="index,follow" />
    <meta property="og:title" content="Covid Agora" />
    <meta
      property="og:description"
      content="Informações sobre o coronavírus do Brasil e do mundo."
    />

    <title>Covid Agora | Início</title>
  </Helmet>
);

export const WorldMeta = () => (
  <Helmet>
    <meta property="og:title" content="Covid Agora - Mundo" />
    <meta
      property="og:description"
      content="Estatísticas do corona vírus no mundo."
    />

    <title>Covid Agora | Mundo</title>
  </Helmet>
);

export const BrazilMeta = () => (
  <Helmet>
    <meta property="og:title" content="Covid Agora - Brasil" />
    <meta
      property="og:description"
      content="Estatísticas do corona vírus no Brasil."
    />

    <title>Covid Agora | Brasil</title>
  </Helmet>
);

export const StatesMeta = () => (
  <Helmet>
    <meta property="og:title" content="Covid Agora - Selecionar estado" />
    <meta
      property="og:description"
      content="Lista todos os estados brasileiros quem possuem índice do coronavírus."
    />

    <title>Covid Agora | Estados</title>
  </Helmet>
);

export const StateInformation = ({ state }) => (
  <Helmet>
    <meta property="og:title" content={`Covid Agora - ${state}`} />
    <meta
      property="og:description"
      content={`Estatísticas do corona vírus no estado: ${state}.`}
    />

    <title>{`Covid Agora | ${state}`}</title>
  </Helmet>
);

StateInformation.propTypes = {
  state: PropTypes.string,
};

StateInformation.defaultProps = {
  state: 'Retrieving',
};
