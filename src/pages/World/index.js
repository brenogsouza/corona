import React, { useEffect, useState } from 'react';

import Layout from '~/layouts/Information';

import List from '~/components/List';

import api from '~/services/api';

import { objectLocaleString } from '~/utils';
import { WorldMeta } from '~/utils/Metas';

import WorldImage from '~/assets/img/world.png';

const WorldPage = () => {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState({});

  useEffect(() => {
    async function getWorldStatus() {
      const { data } = await api.get('countries').then(r => r.data);

      setStatus({
        ...objectLocaleString({
          cases: data.reduce((a, b) => a + b.cases, 0),
          confirmed: data.reduce((a, b) => a + b.confirmed, 0),
          deaths: data.reduce((a, b) => a + b.deaths, 0),
          recovered: data.reduce((a, b) => a + b.recovered, 0),
        }),
        updated_at: data
          .map(c => Date.parse(c.updated_at))
          .sort((a, b) => a - b)[0],
      });
      setLoading(false);
    }

    getWorldStatus();
  }, []);

  return (
    <>
      <WorldMeta />

      <Layout loading={loading}>
        <List
          local="Mundo"
          flag={WorldImage}
          lastUpdate={status.updated_at}
          info={status}
        />
      </Layout>
    </>
  );
};

export default WorldPage;
