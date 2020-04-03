import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '~/services/api';

const InformationStatePage = () => {
  const { uf } = useParams();

  const [state, setState] = useState([]);

  useEffect(() => {
    async function getStates() {
      // const { data } = await api.get('').then((r) => r.data);
      // setStates(data);
    }

    getStates();
  }, []);

  return <h1>InformationStatePage</h1>;
};

export default InformationStatePage;
