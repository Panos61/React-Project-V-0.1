import styled from 'styled-components';

export default styled.div`
  margin-left: auto;
  display: grid;
  grid-template-columns: 15% auto;
  @media screen and (max-width: 1160px) {
    grid-template-columns: 10% auto;
    margin-left: auto;
  }
  @media screen and (max-width: 636px) {
    margin-left: 0;
    grid-template-columns: 1fr;
  }
`;
