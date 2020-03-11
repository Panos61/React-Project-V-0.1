import React from 'react';
import {
  FacebookFilled,
  HeartFilled,
  InstagramFilled,
  TwitterOutlined
} from '@ant-design/icons';
import { Layout, Col, Row } from 'antd';
import { Link } from 'react-router-dom';

const Footer = Layout;

class FooterMain extends React.Component {
  render() {
    return (
      <div>
        <Footer
          style={{
            textAlign: 'center',
            width: '100%',
            backgroundColor: '#fff2e8'
          }}
        >
          <Row
            type="flex"
            justify="end"
            gutter={[8, 16]}
            style={{ marginTop: '5px' }}
          >
            <Col lg={8} xs={8}>
              <ul style={{ listStyle: 'none' }} id="li-style">
                <li>
                  <Link to="/">Πληροφορίες</Link>
                </li>
                <li>
                  <Link to="/Help">Επικοινωνία</Link>
                </li>
                <li>
                  <Link to="/">Features</Link>
                </li>
              </ul>
            </Col>
            <Col lg={8} xs={8}>
              <ul style={{ listStyle: 'none' }} id="li-style">
                <li>
                  <Link to="/">Όροι χρήσης</Link>
                </li>
                <li>
                  <Link to="/">Αξιολογήστε μας</Link>
                </li>
              </ul>
            </Col>
            <Col lg={8} xs={8}>
              <ul style={{ listStyle: 'none' }} id="li-style">
                <li>
                  <Link to="/">FAQs</Link>
                </li>
                <li>
                  <Link to="/">Ομάδα</Link>
                </li>
                <li>
                  <Link to="/">Στόχοι</Link>
                </li>
              </ul>
            </Col>
          </Row>
          <Row type="flex" justify="start" style={{ marginTop: '-5px' }}>
            <Col span={6} push={4}>
              <p style={{ fontFamily: 'cursive' }}>
                <br /> Ακολουθήστε μας!
              </p>
              <Row style={{ marginBottom: '10px' }}>
                <span
                  href=""
                  style={{ cursor: 'pointer', fontSize: '24px', margin: '2px' }}
                >
                  <FacebookFilled id="icons" />
                </span>
                <span
                  href=""
                  style={{ cursor: 'pointer', fontSize: '24px', margin: '2px' }}
                >
                  <InstagramFilled id="icons" />
                </span>
                <span
                  href=""
                  style={{ cursor: 'pointer', fontSize: '24px', margin: '2px' }}
                >
                  <TwitterOutlined id="icons" />
                </span>
              </Row>
            </Col>
          </Row>
          EventPark ©2020 Created with <HeartFilled /> by us!
        </Footer>
      </div>
    );
  }
}

export default FooterMain;
