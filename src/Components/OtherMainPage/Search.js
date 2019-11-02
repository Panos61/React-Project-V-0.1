import React, { Component } from 'react';
import { Input, Col, Row } from 'antd';
import './Search.css';

const { Search } = Input;

class MainSearch extends Component {
  render() {
    return (
      <div>
        <div className='main-image'>
          <Row align={'middle'}>
            <Col md={{ span: 12, offset: 6 }}>
              <div className='container'>
                <div className='search' style={{ marginTop: '200px', marginRight: '5%', marginLeft: '5%' }}>
                  <Search
                    placeholder='Ψάξτε Event :)'
                    onSearch={(value) => console.log(value)}
                    size='large'
                    enterButton
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default MainSearch;
