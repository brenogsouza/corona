import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import Layout from '~/layouts/Default';

import { Container, Content, Wave } from './styles';

const NotFoundPage = () => (
  <Layout>
    <Container>
      <Content>
        <h1>404</h1>
        <h3>Página não Encontrada</h3>

        <Link to="/">
          <FiArrowLeft size={20} /> Voltar para o Início
        </Link>
      </Content>

      <Wave xmlns="http://www.w3.org/2000/Wave" viewBox="0 0 1440 250">
        <path
          fill="#9fc2e3"
          fillOpacity="0.6"
          d="M0,224L40,192C80,160,160,96,240,112C320,128,400,224,480,224C560,224,640,128,720,122.7C800,117,880,203,960,197.3C1040,192,1120,96,1200,74.7C1280,53,1360,107,1400,133.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        />
      </Wave>
    </Container>
  </Layout>
);

export default NotFoundPage;
