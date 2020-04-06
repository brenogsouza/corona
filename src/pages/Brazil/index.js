import moment from 'moment';
import React, { useState, useEffect } from 'react';

import Layout from '~/layouts/Information';

import api from '~/services/api';

import BrazilFlagImage from '~/assets/img/br_flag.png';

import {
  Container,
  HeaderSection,
  GlobalCount,
  Section,
  ContentSection,
} from './styles';

moment.locale('pt-BR');

const BrazilPage = () => {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState({});

  useEffect(() => {
    async function getBrazil() {
      const { data } = await api.get('brazil').then(r => r.data);

      setStatus(data);
      setLoading(false);
    }

    getBrazil();
  }, []);

  if (loading) return <></>;

  return (
    <Layout loading={loading}>
      <Container>
        <HeaderSection>
          <span>
            <h1>COVID-19 - BRASIL</h1>
            <img src={BrazilFlagImage} alt="Brazil Flag" />
          </span>

          <p>Dados oficais e atualizados em tempo real.</p>
        </HeaderSection>

        <GlobalCount>
          <h1>{status.confirmed.toLocaleString()}</h1>
          <p>CONFIRMADOS</p>
        </GlobalCount>

        <Section>
          <ContentSection>
            <h1>{status.cases.toLocaleString()}</h1>
            <p className="suspect">SUSPEITOS</p>
          </ContentSection>
          <ContentSection>
            <h1>{status.deaths.toLocaleString()}</h1>
            <p className="deaths">ÓBITOS</p>
          </ContentSection>
          <ContentSection>
            <h1>{status.recovered.toLocaleString()}</h1>
            <p className="recovered">CURADOS</p>
          </ContentSection>
        </Section>

        <h3 className="lastUpdate">
          Última Atualização: {moment(status.updated_at).format('LLL')}
        </h3>
      </Container>
    </Layout>
  );
};

export default BrazilPage;
