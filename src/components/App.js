import React from 'react';
import '../App.css';
import { Container } from './Container';
import { Quiz } from './Quiz';

export const App = ({ data }) => {
  return (
    <div className='app'>
      <Container>
        <Quiz data={data} />
      </Container>
    </div>
  );
};
