import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowRight } from 'react-icons/fi';

import Layout from '~/layouts/Default';

import { Container, Content, ButtonContainer } from './styles';

const HomePage = () => (
  <Layout>
    <Container>
      <Content>
        <h1>CORONAVÍRUS</h1>
        <span>COVID-19</span>

        <ButtonContainer>
          <Link to="/state">
            Selecionar Estado <FiArrowRight size={30} />
          </Link>
        </ButtonContainer>
      </Content>
    </Container>
  </Layout>
);

export default HomePage;
