import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Layout from '~/layouts/Information';

import List from '~/components/List';

import api from '~/services/api';
import { objectLocaleString } from '~/utils';

const InformationStatePage = () => {
  const history = useHistory();
  const { uf } = useParams();

  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState({});

  useEffect(() => {
    async function getState() {
      const data = await api.get(`brazil/uf/${uf}`).then(r => r.data);

      if (!data.error) {
        setStatus(
          objectLocaleString({
            ...data,
            cases: data.suspects,
            confirmed: data.cases,
          }),
        );
        setLoading(false);
      } else {
        history.push('/state');
      }
    }

    getState();
  }, [history, uf]);

  return (
    <Layout loading={loading}>
      <List
        local={`${status.state} - ${status.uf}`}
        flag={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${status.uf}.png`}
        lastUpdate={status.datetime}
        info={status}
      />
    </Layout>
  );
};

export default InformationStatePage;
