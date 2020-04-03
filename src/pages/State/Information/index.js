import React from 'react';
import { useParams } from 'react-router-dom';

const InformationStatePage = () => {
  const { state } = useParams();

  return <h1>InformationStatePage</h1>;
};

export default InformationStatePage;
