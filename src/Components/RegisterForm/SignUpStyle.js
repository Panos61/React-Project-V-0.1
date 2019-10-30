import React, { Component } from 'react';
import { Card, Layout, Col, Row, Icon } from 'antd';
import WrappedRegistrationForm from './Signup';
import './SignUpStyle.css';

const Footer = Layout;

class CardRegisterStyle extends Component {
  render() {
    const title = (
      <h2 style={{ fontFamily: 'fantasy,verdana,san-serif', fontSize: '27px', color: '#43a047' }}>
        Εγγραφή στο EventPark
      </h2>
    );

    return (
      <div>
        <body className='style'>
          <div id='parent'>
            <div className='register-card'>
              <Card title={title} style={{ borderRadius: '8px' }}>
                <h4 style={{ fontFamily: 'san-serif' }}>
                  Συμπληρώστε τα παρακάτω στοιχεία για την ολοκρήρωση της εγγραφής σας.
                </h4>
                <WrappedRegistrationForm />
              </Card>
            </div>
          </div>

          <Row>
            <Col xs={24}>
              <Footer style={{ textAlign: 'center', width: '100%', backgroundColor: '#e8e8e8' }}>
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
        </body>
      </div>
    );
  }
}

export default CardRegisterStyle;
