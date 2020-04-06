import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Layout from '~/layouts/Information';

import api from '~/services/api';

import {
  Container,
  Header,
  TotalCount,
  Section,
  ContentSection,
} from './styles';

const InformationStatePage = () => {
  const history = useHistory();
  const { uf } = useParams();

  const [loading, setLoading] = useState(true);

  const [state, setState] = useState([]);

  useEffect(() => {
    async function getState() {
      const data = await api.get(`brazil/uf/${uf}`).then(r => r.data);

      if (data.error) history.push('/state');
      else setState(data);

      setLoading(false);
    }

    getState();
  }, []);

  return (
    <Layout loading={loading}>
      <Container>
        <Header>
          <span>
            <h1>
              {state.state} - {state.uf}
              <img
                src={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${state.uf}.png`}
                alt={state.state}
              />
            </h1>
          </span>
          <p>{state.state} tem atualmente:</p>
        </Header>
        <TotalCount>
          <h1>{state.cases}</h1>
          <p>CONFIRMADOS</p>
        </TotalCount>

        <Section>
          <ContentSection>
            <h1>{state.suspects}</h1>
            <p className="suspect">SUSPEITOS</p>
          </ContentSection>
          <ContentSection>
            <h1>{state.deaths}</h1>
            <p className="deaths">ÓBITOS</p>
          </ContentSection>
          <ContentSection>
            <h1>{state.refuses}</h1>
            <p className="recovered">CURADOS</p>
          </ContentSection>
        </Section>
        <h3 className="lastUpdate">
          Última Atualização: {moment(state.updated_at).format('LLL')}
        </h3>
      </Container>
    </Layout>
  );
};

export default InformationStatePage;
