import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: 15% auto 23%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1221px) {
    grid-template-columns: 1f;
    margin-left: auto;
  }

  @media screen and (max-width: 1160px) {
    display: grid;
    grid-template-columns: 10% auto 23%;
    margin-left: auto;
  }

  @media screen and (max-width: 1101px) {
    display: grid;
    grid-template-columns: 10% auto;
    margin-left: auto;
  }

  @media screen and (max-width: 636px) {
    margin-left: 0;
    grid-template-columns: 1fr;
  }
`;
