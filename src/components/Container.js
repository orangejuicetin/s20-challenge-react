import style from 'styled-components';

export const Container = style.div`
  padding: 1rem calc(1rem + 10%);
  transition: 200ms background ease;
  min-height: 100vh;
  background: ${props => props.background || '#fffff'};
`;
