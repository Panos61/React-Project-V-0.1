import React, { Component } from 'react';
import { EnvironmentTwoTone } from '@ant-design/icons';
import { Row, Col, Typography } from 'antd';
import './Cities.css';

const { Title } = Typography;

const ulStyle = {
  listStyle: 'none'
};

class Cities extends Component {
  render() {
    return (
      <div>
        <div className='cities-container' style={{ marginTop: '200px' }}>
          <Row type='flex' justify='center'>
            <Col lg={{ span: 11, offset: 2 }}>
              <Title level={3} style={{ marginBottom: '60px' }}>
                EventPark τοποθεσίες..
                <EnvironmentTwoTone />
              </Title>
            </Col>
          </Row>
          {/* Athens locations */}
          <Row>
            <Col lg={{ span: 9, offset: 4 }} xs={{ span: 10, offset: 5 }}>
              <h3 style={{ marginBottom: '30px' }}>Αττική/Κέντρο</h3>
            </Col>
          </Row>

          <Row type='flex' justify='start' gutter={[8, 16]}>
            <Col lg={{ span: 3, offset: 2 }} sm={{ span: 3, offset: 2 }}>
              <ul id='column1' style={ulStyle}>
                <li>
                  <a href=''>Χαλάνδρι</a>
                </li>
                <li>
                  <a href=''>Χαλάνδρι</a>
                </li>
                <li>
                  <a href=''>Χαλάνδρι</a>
                </li>
                <li>
                  <a href=''>Χαλάνδρι</a>
                </li>
                <li>
                  <a href=''>Χαλάνδρι</a>
                </li>
              </ul>
            </Col>
            <Col lg={{ span: 3, offset: 2 }} sm={{ span: 3, offset: 2 }}>
              <ul id='column1' style={ulStyle}>
                <li>
                  <a href=''>Χαλάνδρι</a>
                </li>
                <li>
                  <a href=''>Χαλάνδρι</a>
                </li>
                <li>
                  <a href=''>Χαλάνδρι</a>
                </li>
                <li>
                  <a href=''>Χαλάνδρι</a>
                </li>
                <li>
                  <a href=''>Χαλάνδρι</a>
                </li>
              </ul>
            </Col>
            <Col lg={{ span: 3, offset: 2 }} sm={{ span: 3, offset: 2 }}>
              <ul id='column1' style={ulStyle}>
                <li>
                  <a href=''>Χαλάνδρι</a>
                </li>
                <li>
                  <a href=''>Χαλάνδρι</a>
                </li>
                <li>
                  <a href=''>Χαλάνδρι</a>
                </li>
                <li>
                  <a href=''>Χαλάνδρι</a>
                </li>
                <li>
                  <a href=''>Χαλάνδρι</a>
                </li>
              </ul>
            </Col>
          </Row>

          {/* Other Cities */}
          <Row type='flex' justify='start' gutter={[8, 16]}>
            <Col lg={{ span: 3, offset: 2 }} sm={{ span: 3, offset: 2 }}>
              <ul id='column-main' style={ulStyle}>
                <li>
                  <a href=''>Φλώρινα</a>
                </li>
                <li>
                  <a href=''>Φλώρινα</a>
                </li>
                <li>
                  <a href=''>Φλώρινα</a>
                </li>
                <li>
                  <a href=''>Φλώρινα</a>
                </li>
                <li>
                  <a href=''>Φλώρινα</a>
                </li>
              </ul>
            </Col>
            <Col lg={{ span: 3, offset: 2 }} sm={{ span: 3, offset: 2 }}>
              <ul id='column-main' style={ulStyle}>
                <li>
                  <a href=''>Φλώρινα</a>
                </li>
                <li>
                  <a href=''>Φλώρινα</a>
                </li>
                <li>
                  <a href=''>Φλώρινα</a>
                </li>
                <li>
                  <a href=''>Φλώρινα</a>
                </li>
                <li>
                  <a href=''>Φλώρινα</a>
                </li>
              </ul>
            </Col>
            <Col lg={{ span: 3, offset: 2 }} sm={{ span: 3, offset: 2 }}>
              <ul id='column-main' style={ulStyle}>
                <li>
                  <a href=''>Φλώρινα</a>
                </li>
                <li>
                  <a href=''>Φλώρινα</a>
                </li>
                <li>
                  <a href=''>Φλώρινα</a>
                </li>
                <li>
                  <a href=''>Φλώρινα</a>
                </li>
                <li>
                  <a href=''>Φλώρινα</a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Cities;
