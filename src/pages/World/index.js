import React, { useEffect, useState } from 'react';
import moment from 'moment';

import Layout from '~/layouts/Information';

import api from '~/services/api';

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
        countrys: data,
        info: {
          cases: data.reduce((a, b) => a + b.cases, 0),
          confirmed: data.reduce((a, b) => a + b.confirmed, 0),
          deaths: data.reduce((a, b) => a + b.deaths, 0),
          recovered: data.reduce((a, b) => a + b.recovered, 0),
        },
      });
      setLoading(false);
    }

    getWorldStatus();
  }, []);

  if (loading) return <></>;

  return (
    <Layout loading={loading}>
      <Container>
        <HeaderSection>
          <h1>COVID NO MUNDO</h1>
        </HeaderSection>

        <GlobalCount>
          <h1>{status.info.confirmed.toLocaleString()}</h1>
          <p>CASOS CONFIRMADOS</p>
        </GlobalCount>
        <Section>
          <ContentSection>
            <h1 className="suspect">{status.info.cases.toLocaleString()}</h1>
            <p>CASOS SUSPEITOS</p>
          </ContentSection>
          <ContentSection>
            <h1 className="deaths">{status.info.deaths.toLocaleString()}</h1>
            <p>MORTES</p>
          </ContentSection>
          <ContentSection>
            <h1 className="recovered">
              {status.info.recovered.toLocaleString()}
            </h1>
            <p>PESSOAS CURADAS</p>
          </ContentSection>
        </Section>

        <h3 className="lastUpdate">SELECIONAR PAÍS (EM BREVE)</h3>
      </Container>
    </Layout>
  );
};

export default WorldPage;
