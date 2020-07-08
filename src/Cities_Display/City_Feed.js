import React, { Component } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import FooterMain from '../Footer';
import './style.css';
import { BackTop } from 'antd';
import styled from 'styled-components';
import UpperBack from './UpperBackground';
import TableFilter from './Components/TableFilter';
import Empty from './empty';

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

  @media screen and (min-width: 1200px) {
    margin-left: 30%;
    margin-right: 4%;
  }
`;

const Sider = styled.nav`
  top: 25%;
  position: absolute;
  @media screen and (max-width: 1200px) {
    display: none;
  }
  @media screen and (max-width: 985px) {
    display: none;
  }
`;

class CityFeed extends Component {
  render() {
    return (
      <>
        <Navbar />
        <section id="main-city-feed">
          <UpperBack />
          <div style={{ marginLeft: '7%', width: '15%' }}>
            <Sider>
              <TableFilter />
            </Sider>
          </div>

          <MainWrap>
            <Empty />
          </MainWrap>
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
