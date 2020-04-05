import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { VictoryTheme, VictoryChart, VictoryBar, VictoryAxis } from 'victory';

import Layout from '~/layouts/Information';

import api from '~/services/api';

import data from './data';

const InformationStatePage = () => {
  const history = useHistory();
  const { uf } = useParams();

  const [state, setState] = useState([]);

  useEffect(() => {
    async function getState() {
      const data = await api.get(`brazil/uf/${uf}`).then(r => r.data);

      if (data.error) history.push('/state');
      else setState(data);
    }

    getState();
  }, []);

  return (
    <Layout>
      <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
        <VictoryAxis
          tickValues={[1, 2, 3]}
          tickFormat={['Suspeitas', 'Comfirmados', 'Mortes']}
        />
        <VictoryAxis tickFormat={x => `$${x / 1000}k`} dependentAxis />
        <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart>
    </Layout>
  );
};

export default InformationStatePage;
