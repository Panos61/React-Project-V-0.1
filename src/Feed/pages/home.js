import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import NewPost from '../Post/NewPost';
import { BackTop } from 'antd';
import Posts from '../../Posts/Posts';

const Wrapper = styled.div``;

const Home = () => {
  return (
    <Wrapper>
      <Header>
        <span style={{ color: 'orange', fontFamily: 'fantasy' }}>
          event meeting
        </span>
      </Header>
      <section style={{ backgroundColor: '#f7f7f7' }}>
        <NewPost />
        <div
          style={{
            margin: '0 auto',
            display: 'table',
          }}
        >
          <Posts />
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
          <p>......</p>
        </div>
        <BackTop />
      </section>
    </Wrapper>
  );
};

export default Home;
