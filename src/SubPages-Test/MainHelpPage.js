import React, { Component } from 'react';

import {
  CarryOutOutlined,
  CheckOutlined,
  ControlOutlined,
  GithubOutlined,
  HeartFilled,
  MessageOutlined,
  OrderedListOutlined,
  QuestionCircleOutlined,
  SmileOutlined,
  TeamOutlined,
} from '@ant-design/icons';

import { Input, Row, Col, Layout } from 'antd';
import Sub_Navbar from './SubPage_Navbar/Sub_Navbar';
import './MainHelpPage.css';

const { Footer } = Layout;
const { Search } = Input;

const IconTextStyle = {
  display: 'block',
  marginTop: '12px',
  padding: '5px'
};

const subTextStyle = {
  fontSize: '13px',
  color: 'grey'
};

class MainHelpPage extends Component {
  render() {
    return (
      <div>
        <Sub_Navbar />
        <section>
          <div className='upper-part_search'>
            <Row align='middle'>
              <Col md={{ span: 12, offset: 6 }}>
                <div
                  className='container'
                  style={{ marginRight: '5%', marginLeft: '5%' }}
                >
                  <Search
                    placeholder='Αναζητήστε Βοήθεια'
                    size='medium'
                    style={{ marginTop: '130px', zIndex: 1 }}
                  ></Search>
                </div>
              </Col>
            </Row>
          </div>

          <div className='lower-part_content'>
            {' '}
            {/* MAIN CONTENT */}
            <Row
              type='flex'
              justify='end'
              gutter={[8, 16]}
              style={{ paddingTop: '11vh' }}
            >
              <Col lg={8} xs={8}>
                <MessageOutlined style={{ fontSize: '7vh', color: '#08c' }} />
                <a href='' style={IconTextStyle} id='linksHelp_Page'>
                  Επικοινωνία <br />
                  <p style={subTextStyle}>
                    Επικοινωνήστε μαζί μας για <br />
                    την επίλυση οποιουδήποτε προβλήματος!
                  </p>
                </a>
              </Col>
              <Col lg={8} xs={8}>
                <OrderedListOutlined style={{ fontSize: '7vh', color: '#08c' }} />
                <a href='' style={IconTextStyle} id='linksHelp_Page'>
                  FAQs <br />
                  <p style={subTextStyle}>Συνηθισμένες ερωτήσεις! </p>
                </a>
              </Col>
              <Col lg={8} xs={8}>
                <QuestionCircleOutlined style={{ fontSize: '7vh', color: '#08c' }} />
                <a href='' style={IconTextStyle} id='linksHelp_Page'>
                  Πληροφορίες <br />
                  <p style={subTextStyle}>
                    Μάθετε πως λειτουργεί η εφαρμογή κ.α!
                  </p>
                </a>
              </Col>
            </Row>
            <Row
              type='flex'
              justify='end'
              gutter={[8, 16]}
              style={{ paddingTop: '8vh' }}
            >
              <Col lg={8} xs={8}>
                <SmileOutlined style={{ fontSize: '7vh', color: '#08c' }} />
                <a href='' style={IconTextStyle} id='linksHelp_Page'>
                  Αξιολογήστε μας <br />
                  <p style={subTextStyle}>
                    Συμβάλλετε στην βελτίωση των υπηρεσιών μας!
                  </p>
                </a>
              </Col>
              <Col lg={8} xs={8}>
                <ControlOutlined style={{ fontSize: '7vh', color: '#08c' }} />
                <a href='' style={IconTextStyle} id='linksHelp_Page'>
                  Όροι χρήσης <br />
                  <p style={subTextStyle}>
                    Μάθετε για τους όρους χρήσης της εφαρμογής!
                  </p>
                </a>
              </Col>
              <Col lg={8} xs={8}>
                <CheckOutlined style={{ fontSize: '7vh', color: '#08c' }} />
                <a href='' style={IconTextStyle} id='linksHelp_Page'>
                  Features <br />
                  <p style={subTextStyle}>Αποκλειστικές λειτουργίες του App!</p>
                </a>
              </Col>
            </Row>
            <Row
              type='flex'
              justify='end'
              gutter={[8, 16]}
              style={{ paddingTop: '8vh' }}
            >
              <Col lg={8} xs={8}>
                <TeamOutlined style={{ fontSize: '7vh', color: '#08c' }} />
                <a href='' style={IconTextStyle} id='linksHelp_Page'>
                  Ομάδα <br />
                  <p style={subTextStyle}>Ποιοι είμαστε;Μάθετε για εμάς!</p>
                </a>
              </Col>
              <Col lg={8} xs={8}>
                <CarryOutOutlined style={{ fontSize: '7vh', color: '#08c' }} />
                <a href='' style={IconTextStyle} id='linksHelp_Page'>
                  Στόχοι <br />
                  <p style={subTextStyle}>
                    Ποιό είναι το μέλλον της εφαρμογής;
                  </p>
                </a>
              </Col>
              <Col lg={8} xs={8}>
                <GithubOutlined style={{ fontSize: '7vh', color: '#08c' }} />
                <a href='' style={IconTextStyle} id='linksHelp_Page'>
                  Προσφέρετε <br />
                  <p style={subTextStyle}>Συνεισφέρετε με κώδικα!</p>
                </a>
              </Col>
            </Row>
          </div>
        </section>

        <footer>
          <Footer
            style={{
              textAlign: 'center',
              backgroundColor: 'unset'
            }}
          >
            EventPark ©2019 Created with <HeartFilled /> by
            us!
          </Footer>
        </footer>
      </div>
    );
  }
}

export default MainHelpPage;
