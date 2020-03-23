import React, { Component } from 'react';
import { Input } from 'antd';
import { Row, Col } from 'react-flexbox-grid';
import './Search.css';

const { Search } = Input;

class MainSearch extends Component {
  render() {
    return (
      <div>
        <div className="main-image">
          <Row>
            <Col xs={12}>
              <Row center="xs">
                <Col xs={6}>
                  <div className="container">
                    <div
                      className="search"
                      style={{
                        marginTop: '200px'
                      }}
                    >
                      <Search
                        placeholder="Ψάξτε Event :)"
                        onSearch={value => console.log(value)}
                        size="large"
                        enterButton
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default MainSearch;
