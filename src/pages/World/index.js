import moment from 'moment';
import React, { useEffect, useState } from 'react';

import Layout from '~/layouts/Information';

import api from '~/services/api';
import { objectLocaleString } from '~/utils';

import {
  Container,
  HeaderSection,
  GlobalCount,
  Section,
  ContentSection,
} from './styles';

const WorldPage = () => {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState({});

  useEffect(() => {
    async function getWorldStatus() {
      const { data } = await api.get('countries').then(r => r.data);

      setStatus({
        ...objectLocaleString({
          cases: data.reduce((a, b) => a + b.cases, 0),
          confirmed: data.reduce((a, b) => a + b.confirmed, 0),
          deaths: data.reduce((a, b) => a + b.deaths, 0),
          recovered: data.reduce((a, b) => a + b.recovered, 0),
        }),
        updated_at: data
          .map(c => Date.parse(c.updated_at))
          .sort((a, b) => a - b)[0],
      });
      setLoading(false);
    }

    getWorldStatus();
  }, []);

  return (
    <Layout loading={loading}>
      <Container>
        <HeaderSection>
          <h1>COVID NO MUNDO</h1>
        </HeaderSection>

        <GlobalCount>
          <h1>{status.confirmed}</h1>
          <p>CASOS CONFIRMADOS</p>
        </GlobalCount>
        <Section>
          <ContentSection>
            <h1 className="suspect">{status.cases}</h1>
            <p>CASOS SUSPEITOS</p>
          </ContentSection>
          <ContentSection>
            <h1 className="deaths">{status.deaths}</h1>
            <p>MORTES</p>
          </ContentSection>
          <ContentSection>
            <h1 className="recovered">{status.recovered}</h1>
            <p>PESSOAS CURADAS</p>
          </ContentSection>
        </Section>
        <h3 className="lastUpdate">
          Última Atualização: {moment(status.updated_at).format('LLL')}
        </h3>
        <h3 className="lastUpdate">SELECIONAR PAÍS (EM BREVE)</h3>
      </Container>
    </Layout>
  );
};

export default WorldPage;
