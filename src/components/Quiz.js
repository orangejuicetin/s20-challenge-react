import React from 'react';
import { Question } from './Question';

export const Quiz = ({ data }) => {
  return (
    <>
      {data.questions.map(obj => {
        return <Question question={obj} />;
      })}
    </>
  );
};
