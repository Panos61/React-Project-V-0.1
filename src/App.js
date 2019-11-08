import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
//import PopBtn from './Components/OtherMainPage/PopBtn';
import Search from './Components/OtherMainPage/Search';
import { BackTop, Layout, Row, Col, Icon } from 'antd';
import Cities from './Components/OtherMainPage/Cities';
//import ContactForm from './SubPages-Test/SubPages/Contact';
import MainHelpPage from './SubPages-Test/MainHelpPage';
import { Link, Route } from 'react-router-dom';

const Footer = Layout;

class App extends Component {
  render() {
    return (
      <div className='main-page-style'>
        <Navbar />

        {/* <PopBtn /> */}

        <Search />
        <BackTop />

        <div className='fdsf'>
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
        </div>
        <Cities />

        <Footer
          style={{
            textAlign: 'center',
            width: '100%',
            backgroundColor: '#e8e8e8',
            height: '290px'
          }}
        >
          <Row type='flex' justify='end' gutter={[8, 16]} style={{ marginTop: '15px' }}>
            <Col lg={8} xs={8}>
              <ul style={{ listStyle: 'none' }} id='li-style'>
                <li>
                  <a href=''>Όροι χρήσης</a>
                </li>
                <li>
                  <a href=''>Πληροφορίες</a>
                </li>
                <li>
                  <Link to='/Help'>Επικοινωνία</Link>
                </li>
              </ul>
            </Col>
            <Col lg={8} xs={8}>
              <ul style={{ listStyle: 'none' }} id='li-style'>
                <li>
                  <a href=''>Features</a>
                </li>
                <li>
                  <a href=''>Αξιολογήστε μας</a>
                </li>
              </ul>
            </Col>
            <Col lg={8} xs={8}>
              <ul style={{ listStyle: 'none' }} id='li-style'>
                <li>
                  <a href=''>FAQs</a>
                </li>
                <li>
                  <a href=''>Ομάδα</a>
                </li>
                <li>
                  <a href=''>Στόχοι</a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row type='flex' justify='start' style={{ marginTop: '30px' }}>
            <Col span={6} push={4}>
              <p style={{ fontFamily: 'cursive' }}>
                EventPark
                <br /> Ακολουθήστε μας!
              </p>
              <Row style={{ marginBottom: '10px' }}>
                <span href='' style={{ cursor: 'pointer', fontSize: '24px', margin: '2px' }}>
                  <Icon type='facebook' theme='filled' id='icons' />
                </span>
                <span href='' style={{ cursor: 'pointer', fontSize: '24px', margin: '2px' }}>
                  <Icon type='instagram' theme='filled' id='icons' />
                </span>
                <span href='' style={{ cursor: 'pointer', fontSize: '24px', margin: '2px' }}>
                  <Icon type='twitter' id='icons' />
                </span>
              </Row>
            </Col>
          </Row>
          EventPark ©2019 Created with <Icon type='heart' theme='filled' /> by us!
        </Footer>

        {/* Routes */}
        <Route path='/Help' Component={MainHelpPage} />
      </div>
    );
  }
}

export default App;
