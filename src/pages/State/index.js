import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Layout from '~/layouts/Information';

import api from '~/services/api';

import { Container } from './styles';

const StatePage = () => {
  const [loading, setLoading] = useState(true);
  const [states, setStates] = useState([]);

  useEffect(() => {
    async function getStates() {
      const { data } = await api.get('').then(r => r.data);

      setStates(data.sort((a, b) => a.state.localeCompare(b.state)));
      setLoading(false);
    }

    getStates();
  }, []);

  return (
    <Layout loading={loading}>
      <Container>
        {states.map(state => (
          <Link key={state.state} to={`/state/${state.uf}`}>
            <span>{state.state}</span>
            <img
              src={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${state.uf}.png`}
              alt={state.state}
            />
          </Link>
        ))}
      </Container>
    </Layout>
  );
};

export default StatePage;
