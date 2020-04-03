import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Section, ButtonsContainer } from './styles';

import LogoQR from '../../assets/img/qrcode.png';

const DownloadPage = () => (
  <Container>
    <Section>
      <h1>Download</h1>
      <p>
        Baixe agora a versão móvel da nova plataforma do coronavírus e fique por
        dentro de todas informações na palma da sua mão!
      </p>
      <ButtonsContainer>
        <Link to="/">
          <FiArrowLeft color="#f04437" size={20} /> Voltar para o Início
        </Link>
      </ButtonsContainer>
    </Section>
    <img src={LogoQR} alt="QRCODE" />
  </Container>
);

export default DownloadPage;
