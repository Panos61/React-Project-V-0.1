import React, { Component } from 'react';
import { Input, Row, Col, Layout, Icon, Typography } from 'antd';
import Sub_Navbar from './SubPage_Navbar/Sub_Navbar';
import './MainHelpPage.css';
import { SIGBREAK } from 'constants';

/* const { Title } = Typography; */
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
                {/* <Title level={3} style={{ color: 'whitesmoke' }}>
                  Αναζήτηση Πληροφοριών <Icon type='info-circle' />
                </Title> */}
                <div className='container' style={{ marginRight: '5%', marginLeft: '5%' }}>
                  <Search placeholder='Αναζητήστε Βοήθεια' size='medium' style={{ marginTop: '130px', zIndex: 1 }} />
                </div>
              </Col>
            </Row>
          </div>

          <div className='lower-part_content'>
            {' '}
            {/* MAIN CONTENT */}
            <Row type='flex' justify='end' gutter={[8, 16]} style={{ paddingTop: '11vh' }}>
              <Col lg={8} xs={8}>
                <Icon type='message' style={{ fontSize: '7vh', color: '#08c' }} theme='outlined' />
                <a href='' style={IconTextStyle} id='linksHelp_Page'>
                  Επικοινωνία <br />
                  <p style={subTextStyle}>
                    Επικοινωνήστε μαζί μας για <br />
                    την επίλυση οποιουδήποτε προβλήματος!
                  </p>
                </a>
              </Col>
              <Col lg={8} xs={8}>
                <Icon type='ordered-list' style={{ fontSize: '7vh', color: '#08c' }} />
                <a href='' style={IconTextStyle} id='linksHelp_Page'>
                  FAQs <br />
                  <p style={subTextStyle}>Συνηθισμένες ερωτήσεις! </p>
                </a>
              </Col>
              <Col lg={8} xs={8}>
                <Icon type='question-circle' style={{ fontSize: '7vh', color: '#08c' }} />
                <a href='' style={IconTextStyle} id='linksHelp_Page'>
                  Πληροφορίες <br />
                  <p style={subTextStyle}>Μάθετε πως λειτουργεί η εφαρμογή κ.α!</p>
                </a>
              </Col>
            </Row>
            <Row type='flex' justify='end' gutter={[8, 16]} style={{ paddingTop: '8vh' }}>
              <Col lg={8} xs={8}>
                <Icon type='smile' style={{ fontSize: '7vh', color: '#08c' }} />
                <a href='' style={IconTextStyle} id='linksHelp_Page'>
                  Αξιολογήστε μας <br />
                  <p style={subTextStyle}>Συμβάλλετε στην βελτίωση των υπηρεσιών μας!</p>
                </a>
              </Col>
              <Col lg={8} xs={8}>
                <Icon type='control' style={{ fontSize: '7vh', color: '#08c' }} />
                <a href='' style={IconTextStyle} id='linksHelp_Page'>
                  Όροι χρήσης <br />
                  <p style={subTextStyle}>Μάθετε για τους όρους χρήσης της εφαρμογής!</p>
                </a>
              </Col>
              <Col lg={8} xs={8}>
                <Icon type='check' style={{ fontSize: '7vh', color: '#08c' }} />
                <a href='' style={IconTextStyle} id='linksHelp_Page'>
                  Features <br />
                  <p style={subTextStyle}>Αποκλειστικές λειτουργίες του App!</p>
                </a>
              </Col>
            </Row>
            <Row type='flex' justify='end' gutter={[8, 16]} style={{ paddingTop: '8vh' }}>
              <Col lg={8} xs={8}>
                <Icon type='team' style={{ fontSize: '7vh', color: '#08c' }} />
                <a href='' style={IconTextStyle} id='linksHelp_Page'>
                  Όμαδα <br />
                  <p style={subTextStyle}>Ποιοι είμαστε;Μάθετε για εμάς!</p>
                </a>
              </Col>
              <Col lg={8} xs={8}>
                <Icon type='carry-out' style={{ fontSize: '7vh', color: '#08c' }} />
                <a href='' style={IconTextStyle} id='linksHelp_Page'>
                  Στόχοι <br />
                  <p style={subTextStyle}>Ποιό είναι το μέλλον της εφαρμογής;</p>
                </a>
              </Col>
              <Col lg={8} xs={8}>
                <Icon type='github' style={{ fontSize: '7vh', color: '#08c' }} />
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
            EventPark ©2019 Created with <Icon type='heart' theme='filled' /> by us!
          </Footer>
        </footer>
      </div>
    );
  }
}

export default MainHelpPage;
