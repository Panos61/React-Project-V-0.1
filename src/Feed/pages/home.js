import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';

const Wrapper = styled.div``;

const Home = () => {
  return (
    <Wrapper>
      <Header>
        <span>Home</span>
      </Header>
      <h2>Stuff</h2>
    </Wrapper>
  );
};

export default Home;
