import React from 'react';
import styled, { keyframes } from 'styled-components';

const SpinnerComponent = () => <Container />;

const spinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  width: 60px;
  height: 60px;

  border-radius: 50%;
  border: 3px solid transparent;
  border-top: 3px solid #0353a4;
  border-left: 3px solid #0353a4;

  animation: ${spinnerAnimation} 1s linear infinite;
`;

export default SpinnerComponent;
