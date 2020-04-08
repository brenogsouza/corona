import PropTypes from 'prop-types';
import React from 'react';
import MetaTags from 'react-meta-tags';

export const HomeMeta = () => (
  <MetaTags>
    <meta name="robots" content="index,follow" />
    <meta property="og:title" content="Covid Agora" />
    <meta
      property="og:description"
      content="Informações sobre o coronavírus do Brasil e do mundo."
    />

    <title>Covid Agora | Início</title>
  </MetaTags>
);

export const WorldMeta = () => (
  <MetaTags>
    <meta property="og:title" content="Covid Agora - Mundo" />
    <meta
      property="og:description"
      content="Estatísticas do corona vírus no mundo."
    />

    <title>Covid Agora | Mundo</title>
  </MetaTags>
);

export const BrazilMeta = () => (
  <MetaTags>
    <meta property="og:title" content="Covid Agora - Brasil" />
    <meta
      property="og:description"
      content="Estatísticas do corona vírus no Brasil."
    />

    <title>Covid Agora | Brasil</title>
  </MetaTags>
);

export const StatesMeta = () => (
  <MetaTags>
    <meta property="og:title" content="Covid Agora - Selecionar estado" />
    <meta
      property="og:description"
      content="Lista todos os estados brasileiros quem possuem índice do coronavírus."
    />

    <title>Covid Agora | Estados</title>
  </MetaTags>
);

export const StateInformation = ({ state }) => (
  <MetaTags>
    <meta property="og:title" content={`Covid Agora - ${state}`} />
    <meta
      property="og:description"
      content={`Estatísticas do corona vírus no estado: ${state}.`}
    />

    <title>{`Covid Agora | ${state}`}</title>
  </MetaTags>
);

StateInformation.propTypes = {
  state: PropTypes.string,
};

StateInformation.defaultProps = {
  state: 'Retrieving',
};
