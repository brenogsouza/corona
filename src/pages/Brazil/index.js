import React, { useState, useEffect } from 'react';

import Layout from '~/layouts/Information';

import List from '~/components/List';

import api from '~/services/api';

import { objectLocaleString } from '~/utils';
import { BrazilMeta } from '~/utils/Metas';

import BrazilFlagImage from '~/assets/img/br_flag.png';

const BrazilPage = () => {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState({});

  useEffect(() => {
    async function getBrazil() {
      const { data } = await api.get('brazil').then(r => r.data);

      setStatus(objectLocaleString(data));
      setLoading(false);
    }

    getBrazil();
  }, []);

  return (
    <Layout loading={loading}>
      <BrazilMeta />

      <List
        local="Brazil"
        flag={BrazilFlagImage}
        lastUpdate={status.updated_at}
        info={status}
      />
    </Layout>
  );
};

export default BrazilPage;
