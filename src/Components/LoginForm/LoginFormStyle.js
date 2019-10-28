import React, { Component } from 'react';
import { Card, Icon, Col, Row, Layout } from 'antd';
import WrappedNormalLoginForm from './LoginForm';
import './LoginFormStyle.css';

const Footer = Layout;

class CardLoginStyle extends Component {
  render() {
    const title = (
      <h2
        style={{
          fontFamily: 'fantasy,verdana,san-serif',
          fontSize: '27px',
          color: '#43a047'
        }}
      >
        Σύνδεση στο EventPark
      </h2>
    );

    return (
      <div>
        <div id='parent'>
          <div className='login-card'>
            <Card title={title} style={{ borderRadius: '8px' }}>
              <h4>Συμπληρώστε τα παρακάτω στοιχεία για την ολοκρήρωση της συνδεσής σας.</h4>
              <WrappedNormalLoginForm />
            </Card>
          </div>
        </div>

        <Row>
          <Col xs={24}>
            <Footer
              style={{
                textAlign: 'center',
                width: '100%',
                backgroundColor: '#e8e8e8',
                marginBottom: '-15%'
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
                      <a href=''>Επικοινωνία</a>
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
          </Col>
        </Row>
      </div>
    );
  }
}

export default CardLoginStyle;
