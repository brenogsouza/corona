import PropTypes from 'prop-types';
import React from 'react';
import MetaTags from 'react-meta-tags';

const Meta = ({ children }) => (
  <MetaTags>
    <meta property="og:image" content="https://nowcovid.tk/img/icon.png" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Covid Agora" />

    {children}
  </MetaTags>
);

export const HomeMeta = () => (
  <Meta>
    <meta name="robots" content="index,follow" />
    <meta property="og:url" content="https://nowcovid.tk/" />
    <meta property="og:title" content="Covid Agora" />
    <meta
      property="og:description"
      content="Informações sobre o coronavírus do Brasil e do mundo."
    />

    <title>Covid Agora | Início</title>
  </Meta>
);

export const WorldMeta = () => (
  <Meta>
    <meta property="og:url" content="https://nowcovid.tk/world" />
    <meta property="og:title" content="Covid Agora - Mundo" />
    <meta
      property="og:description"
      content="Estatísticas do corona vírus no mundo."
    />

    <title>Covid Agora | Mundo</title>
  </Meta>
);

export const BrazilMeta = () => (
  <Meta>
    <meta property="og:url" content="https://nowcovid.tk/brazil" />
    <meta property="og:title" content="Covid Agora - Brasil" />
    <meta
      property="og:description"
      content="Estatísticas do corona vírus no Brasil."
    />

    <title>Covid Agora | Brasil</title>
  </Meta>
);

export const StatesMeta = () => (
  <Meta>
    <meta property="og:url" content="https://nowcovid.tk/states" />
    <meta property="og:title" content="Covid Agora - Selecionar estado" />
    <meta
      property="og:description"
      content="Lista todos os estados brasileiros quem possuem índice do coronavírus."
    />

    <title>Covid Agora | Estados</title>
  </Meta>
);

export const StateInformation = ({ state }) => (
  <Meta>
    <meta property="og:url" content={`https://nowcovid.tk/states/${state}`} />
    <meta property="og:title" content={`Covid Agora - ${state}`} />
    <meta
      property="og:description"
      content={`Estatísticas do corona vírus no estado: ${state}.`}
    />

    <title>{`Covid Agora | ${state}`}</title>
  </Meta>
);

Meta.propTypes = {
  children: PropTypes.node.isRequired,
};

StateInformation.propTypes = {
  state: PropTypes.string,
};

StateInformation.defaultProps = {
  state: 'Retrieving',
};
