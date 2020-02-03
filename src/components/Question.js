import React from 'react';
import style from 'styled-components';

const Box = style.div`
  position: relative; 
  width: auto; 
`;

const Prompt = style.div`
  position: relative;
  text-align: center;
  display: inline-block;
  background: #fffff;
  box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.1);
`;

const Choice = style.button`
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const Question = question => {
  return (
    <Box>
      <Prompt>{question.question.prompt}</Prompt>
      {/* {question.question.options.map(letter => {
        return <Choice />;
      })} */}
    </Box>
  );
};
