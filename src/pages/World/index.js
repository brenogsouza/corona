import React from 'react';

import Layout from '~/layouts/Information';

import {
  Container,
  HeaderSection,
  GlobalCount,
  Section,
  ContentSection,
} from './styles';

const WorldPage = () => {
  return (
    <Layout>
      <Container>
        <HeaderSection>
          <h1>COVID-19 - MUNDO</h1>
        </HeaderSection>

        <GlobalCount>
          <h1>0</h1>
          <p>CONFIRMADOS</p>
        </GlobalCount>
        <Section>
          <ContentSection>
            <h1>0</h1>
            <p>SUSPEITOS</p>
          </ContentSection>
          <ContentSection>
            <h1>0</h1>
            <p>ÓBITOS</p>
          </ContentSection>
          <ContentSection>
            <h1>0</h1>
            <p>CURADOS</p>
          </ContentSection>
        </Section>
        <h3>Última Atualização: 0</h3>
      </Container>
    </Layout>
  );
};

export default WorldPage;
