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
      <h4>Βρείτε Άτομα - ΤEST</h4>
      <p>[placeholder]</p>
      <p>[placeholder]</p>
      <p>[placeholder]</p>
      <p>[placeholder]</p>
      <p>[placeholder]</p>
      <p>[placeholder]</p>
      <br />
      <br />
      <br />
      <br />
      <h2>test</h2>
      <h2>test</h2>
      <h2>test</h2>
      <h2>test</h2>
      <h2>test</h2>
    </Wrapper>
  );
};

export default Suggestion;
