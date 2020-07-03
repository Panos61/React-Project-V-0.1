import React, { Component } from 'react';
import { Input, Affix } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  @media screen and (min-width: 1200px) {
    width: 40%;
    margin: 0 auto;
    display: table;
  }
`;

const { Search } = Input;

const SearchCityFeed = () => {
  return (
    <>
      <Wrapper>
        <Affix offsetTop={100}>
          <Search placeholder="Αναζητήστε Events" size={'large'} />
        </Affix>
      </Wrapper>
    </>
  );
};

export default SearchCityFeed;
