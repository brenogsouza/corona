import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import api from '~/services/api';

const InformationStatePage = () => {
  const history = useHistory();
  const { uf } = useParams();

  const [state, setState] = useState([]);

  useEffect(() => {
    async function getState() {
      const data = await api.get(`brazil/uf/${uf}`).then((r) => r.data);

      if (data.error) history.push('/state');
      else setState(data);
    }

    getState();
  }, []);

  return <h1>InformationStatePage</h1>;
};

export default InformationStatePage;
