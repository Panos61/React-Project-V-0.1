import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import NewPost from '../Post/NewPost';

const Wrapper = styled.div``;

const Home = () => {
  return (
    <Wrapper>
      <Header>
        <span style={{ color: 'orange', fontFamily: 'fantasy' }}>
          event meeting
        </span>
      </Header>
      <NewPost />
    </Wrapper>
  );
};

export default Home;
