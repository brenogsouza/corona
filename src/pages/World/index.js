import React from 'react';

import Layout from '~/layouts/Information';

import {
  Container,
  HeaderSection,
  GlobalCount,
  Section,
  ContentSection,
} from './styles';

const WorldPage = () => (
  <Layout>
    <Container>
      <HeaderSection>
        <h1>COVID-19 - MUNDO</h1>
      </HeaderSection>

      <GlobalCount>
        <h1>0</h1>
        <p>INFECTADOS</p>
      </GlobalCount>
      <Section>
        <ContentSection>
          <h1>0</h1>
          <p>ATIVOS</p>
        </ContentSection>
        <ContentSection>
          <h1>0</h1>
          <p>MORTES</p>
        </ContentSection>
        <ContentSection>
          <h1>0</h1>
          <p>CURAS</p>
        </ContentSection>
      </Section>
      <h3>Última Atualização : 00/00/0000 - 00:00</h3>
    </Container>
  </Layout>
);

export default WorldPage;
