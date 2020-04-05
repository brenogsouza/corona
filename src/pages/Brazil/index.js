import moment from 'moment';
import React, { useState, useEffect } from 'react';

import Layout from '~/layouts/Information';

import api from '~/services/api';

import {
  Container,
  HeaderSection,
  GlobalCount,
  Section,
  ContentSection,
} from './styles';

moment.locale('pt-br');

const BrazilPage = () => {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState({});

  async function getBrazil() {
    const response = await api.get('/brazil').then(r => r.data);

    setStatus(response.data);

    setLoading(false);
  }

  useEffect(() => {
    getBrazil();
  }, []);

  return (
    <Layout loading={loading}>
      <Container>
        <HeaderSection>
          <h1>COVID-19 - BRASIL</h1>
          <p>Dados oficais e atualizados em tempo real.</p>
        </HeaderSection>

        <GlobalCount>
          <h1>{status.confirmed}</h1>
          <p>CONFIRMADOS</p>
        </GlobalCount>
        <Section>
          <ContentSection>
            <h1>{status.cases}</h1>
            <p>SUSPEITOS</p>
          </ContentSection>
          <ContentSection>
            <h1>{status.deaths}</h1>
            <p>ÓBITOS</p>
          </ContentSection>
          <ContentSection>
            <h1>{status.recovered}</h1>
            <p>CURADOS</p>
          </ContentSection>
        </Section>
        <h3>Última Atualização: {moment(status.updated_at).format('L')}</h3>
      </Container>
    </Layout>
  );
};

export default BrazilPage;
