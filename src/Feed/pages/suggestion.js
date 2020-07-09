import React from 'react';
import styled from 'styled-components';
import Follow from '../Components/Follow';

const Wrapper = styled.div`
  border-left: 1px solid #ddd;
  padding: 1rem;
  min-height: 100vh;
  z-index: 90;
  background: white;
  margin-left: 5rem;
  position: fixed;
  right: 0;
  @media screen and (max-width: 1070px) {
    display: none;
  }
`;

const Suggestion = () => {
  return (
    <Wrapper>
      <Follow />
    </Wrapper>
  );
};

export default Suggestion;
