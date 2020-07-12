import React from 'react';
import styled from 'styled-components';
import Follow from '../Components/Follow';

// const Wrapper = styled.div`
//   border-left: 1px solid #ddd;
//   padding: 1rem;
//   min-height: 100vh;
//   margin-left: 5rem;
//   position: fixed;
//   right: 0;
//   @media screen and (max-width: 1070px) {
//     display: none;
//   }
// `;

const Wrapper = styled.nav`
  border-left: 1px solid #deeaee;
  padding: 1rem;
  min-height: 100vh;
  width: 22%;

  position: fixed;
  right: 0;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

const Suggestion = () => {
  return (
    <Wrapper>
      {/* <Follow /> */}
      <p>@Anna</p>
      <p>@Anna</p>
      <p>@Anna</p>
      <p>@Anna</p>
      <p>@Anna</p>
    </Wrapper>
  );
};

export default Suggestion;
