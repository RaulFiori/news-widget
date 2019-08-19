import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import NewsWidget from './components/NewsWidget';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fafafa;
`;

const App = () => {
  return (
    <Container>
      <NewsWidget />
    </Container>
  );
};

export default hot(module)(App);
