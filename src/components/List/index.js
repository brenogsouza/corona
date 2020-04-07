import moment from 'moment';
import localization from 'moment/locale/pt-br';
import PropTypes from 'prop-types';
import React from 'react';

import { Container, Header, FlexContainer, FlexItem } from './styles';

const ListComponent = ({ local, flag, info, lastUpdate }) => (
  <Container>
    <Header>
      <span>
        <h1>COVID-19 ({local})</h1>
        <img src={flag} alt="Flag" />
      </span>

      <p>Dados oficais e atualizados em tempo real.</p>
    </Header>

    <FlexContainer>
      <FlexItem>
        <strong style={{ color: '#3baa1b' }}>{info.confirmed}</strong>
        <p>CASOS CONFIRMADOS</p>
      </FlexItem>

      <FlexItem>
        <strong style={{ color: '#eac822' }}>{info.cases}</strong>
        <p>SUSPEITOS</p>
      </FlexItem>

      <FlexItem>
        <strong style={{ color: '#d51616' }}>{info.deaths}</strong>
        <p>ÓBITOS</p>
      </FlexItem>

      {info.recovered && (
        <FlexItem>
          <strong style={{ color: '#1678d5' }}>{info.recovered}</strong>
          <p>CURADOS</p>
        </FlexItem>
      )}
    </FlexContainer>

    <p style={{ fontSize: '1rem' }}>
      <strong>Ùltima Atualização: </strong>
      {moment(lastUpdate).locale('pt-br', localization).format('LLL')}
    </p>
  </Container>
);

ListComponent.propTypes = {
  local: PropTypes.string,
  flag: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  lastUpdate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  info: PropTypes.shape({
    confirmed: PropTypes.string,
    cases: PropTypes.string,
    deaths: PropTypes.string,
    recovered: PropTypes.string,
  }).isRequired,
};

ListComponent.defaultProps = {
  flag: 'Retrieving',
  local: 'Retrieving',
  lastUpdate: 0,
};

export default ListComponent;
