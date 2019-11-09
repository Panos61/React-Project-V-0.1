import React, { Component } from 'react';
import { Input, Row, Col, Layout, Icon, Typography } from 'antd';
import './MainHelpPage.css';

/* const { Title } = Typography; */
const { Footer } = Layout;
const { Search } = Input;

const IconTextStyle = {
  fontSize: '18px',
  display: 'block',
  marginTop: '12px',
  padding: '5px'
};

class MainHelpPage extends Component {
  render() {
    return (
      <div>
        <section>
          <div className='upper-part_search'>
            <Row align='middle'>
              <Col md={{ span: 12, offset: 6 }}>
                {/* <Title level={3} style={{ color: 'whitesmoke' }}>
                  Αναζήτηση Πληροφοριών <Icon type='info-circle' />
                </Title> */}
                <div className='container' style={{ marginRight: '5%', marginLeft: '5%' }}>
                  <Search placeholder='Αναζητήστε Βοήθεια' size='medium' style={{ marginTop: '130px' }} />
                </div>
              </Col>
            </Row>
          </div>

          <div className='lower-part_content'>
            <Row type='flex' justify='end' gutter={[8, 16]} style={{ paddingTop: '12vh' }}>
              <Col lg={8} xs={8}>
                <Icon type='message' style={{ fontSize: '7vh', color: '#08c' }} theme='outlined' />
                <a href='' style={IconTextStyle} id='linksHelp_Page'>
                  Επικοινωνία
                </a>
              </Col>
              <Col lg={8} xs={8}>
                <Icon type='team' style={{ fontSize: '7vh', color: '#08c' }} />
                <a href='' style={IconTextStyle} id='linksHelp_Page'>
                  Όμαδα
                </a>
              </Col>
              <Col lg={8} xs={8}>
                <Icon type='question-circle' style={{ fontSize: '7vh', color: '#08c' }} />
                <a href='' style={IconTextStyle} id='linksHelp_Page'>
                  Πληροφορίες
                </a>
              </Col>
            </Row>

            <Row type='flex' justify='end' gutter={[8, 16]} style={{ paddingTop: '20vh' }}>
              <Col lg={8} xs={8}>
                <Icon type='smile' style={{ fontSize: '7vh', color: '#08c' }} />
                <a href='' style={IconTextStyle} id='linksHelp_Page'>
                  Αξιολογήστε μας
                </a>
              </Col>
              <Col lg={8} xs={8}>
                <Icon type='control' style={{ fontSize: '7vh', color: '#08c' }} />
                <a href='' style={IconTextStyle} id='linksHelp_Page'>
                  Όροι χρήσης
                </a>
              </Col>
              <Col lg={8} xs={8}>
                <Icon type='carry-out' style={{ fontSize: '7vh', color: '#08c' }} />
                <a href='' style={IconTextStyle} id='linksHelp_Page'>
                  Στόχοι
                </a>
              </Col>
            </Row>

            <Row type='flex' justify='end' gutter={[8, 16]} style={{ paddingTop: '20vh' }}>
              <Col lg={8} xs={8}>
                <Icon type='ordered-list' style={{ fontSize: '7vh', color: '#08c' }} />
                <a href='' style={IconTextStyle} id='linksHelp_Page'>
                  FAQs
                </a>
              </Col>
              <Col lg={8} xs={8}>
                <Icon type='check' style={{ fontSize: '7vh', color: '#08c' }} />
                <a href='' style={IconTextStyle} id='linksHelp_Page'>
                  Features
                </a>
              </Col>
              <Col lg={8} xs={8}>
                <Icon type='github' style={{ fontSize: '7vh', color: '#08c' }} />
                <a href='' style={IconTextStyle} id='linksHelp_Page'>
                  Προσφέρετε
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
