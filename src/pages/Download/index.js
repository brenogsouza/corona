import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import QRCodeImage from '~/assets/img/qrcode.png';

import { Container, Content, BackButton, Image } from './styles';

const DownloadPage = () => (
  <Container>
    <Content>
      <h1>Download</h1>
      <p>
        Baixe agora a versão móvel da nova plataforma do coronavírus e fique por
        dentro de todas informações na palma da sua mão!{' '}
        <a href="/#">Download via Google Drive.</a>
      </p>

      <BackButton>
        <Link to="/">
          <FiArrowLeft size={25} /> Voltar para o Início
        </Link>
      </BackButton>
    </Content>

    <Image src={QRCodeImage} alt="QRCODE" />
  </Container>
);

export default DownloadPage;
