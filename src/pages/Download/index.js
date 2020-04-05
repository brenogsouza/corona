import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import LogoQR from '../../assets/img/qrcode.png';
import { Container, Section, ButtonsContainer } from './styles';

const DownloadPage = () => (
  <Container>
    <Section>
      <h1>Download</h1>
      <p>
        Baixe agora a versão móvel da nova plataforma do coronavírus e fique por
        dentro de todas informações na palma da sua mão!
        <a href="/#"> Download via Google Drive.</a>
      </p>

      <ButtonsContainer>
        <Link to="/">
          <FiArrowLeft size={20} /> Voltar para o Início
        </Link>
      </ButtonsContainer>
    </Section>
    <img src={LogoQR} alt="QRCODE" />
  </Container>
);

export default DownloadPage;
