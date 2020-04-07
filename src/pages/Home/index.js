import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowRight } from 'react-icons/fi';

import Layout from '~/layouts/Default';

import { HomeMeta } from '~/utils/Metas';

import { Container, Content, ButtonContainer } from './styles';

const HomePage = () => (
  <>
    <HomeMeta />

    <Layout>
      <Container>
        <Content>
          <h1>CORONAVÍRUS</h1>
          <span>COVID-19</span>

          <ButtonContainer>
            <Link to="/states">
              Selecionar Estado <FiArrowRight size={30} />
            </Link>
          </ButtonContainer>
        </Content>
      </Container>
    </Layout>
  </>
);

export default HomePage;
