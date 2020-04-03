import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Layout from '~/layouts/Default';

import { Container, Content, ButtonsContainer } from './styles';

const HomePage = () => (
  <Layout>
    <Container>
      <Content>
        <h1>CORONAVÍRUS</h1>
        <span>COVID-19</span>
        <ButtonsContainer>
          <Link to="/state">
            Selecionar Estado <FiArrowRight size={30} />
          </Link>
        </ButtonsContainer>
      </Content>
    </Container>
  </Layout>
);

export default HomePage;
