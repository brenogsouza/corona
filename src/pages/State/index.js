import React from 'react';

import Layout from '~/layouts/Information';

import { Container, Content } from './styles';

const MyStatePage = () => {
  return (
    <Layout>
      <Container>
        <Content>
          <h1>COVID-19</h1>
          <span>Dados no seu estado - Mato grosso do Sul</span>
        </Content>
      </Container>
    </Layout>
  );
};

export default MyStatePage;
