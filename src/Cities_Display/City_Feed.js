import React, { Component } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import FooterMain from '../Footer';
import './style.css';
import { BackTop } from 'antd';
import styled from 'styled-components';
import UpperBack from './UpperBackground';
import TableFilter from './Components/TableFilter';
import Empty from './empty';
import MobileFilter from './Components/MobileFilter';
import HotTags from './Components/Tags';

const MainWrap = styled.div`
  @media screen and (min-width: 1800px) {
    margin-left: 23%;
    margin-right: 4%;
  }

  @media screen and (min-width: 1590px) {
    margin-left: 25%;
    margin-right: 4%;
  }

  @media screen and (min-width: 1400px) {
    margin-left: 28%;
    margin-right: 4%;
  }

  @media screen and (min-width: 1201px) {
    margin-left: 30%;
    margin-right: 4%;
  }
`;

const Sider = styled.nav`
  top: 20%;
  position: absolute;
  @media screen and (max-width: 1200px) {
    display: none;
  }
  @media screen and (max-width: 985px) {
    display: none;
  }
`;

const TagsWrapper = styled.div`
  margin-top: 15px;
  margin-left: 20%;
  @media screen and (max-width: 1200px) {
    margin: 20px;
    text-align: center;
  }
`;

class CityFeed extends Component {
  render() {
    return (
      <>
        <Navbar />
        <section id="main-city-feed">
          <UpperBack />
          <div style={{ marginLeft: '8%', width: '15%' }}>
            <Sider>
              <TableFilter />
            </Sider>
          </div>

          <MainWrap>
            <TagsWrapper>
              <HotTags />
            </TagsWrapper>
            <Empty />
          </MainWrap>
          {/* Mobile Filter Button */}
          <MobileFilter />

          <BackTop />
        </section>
        <footer>
          <FooterMain />
        </footer>
      </>
    );
  }
}

export default CityFeed;
