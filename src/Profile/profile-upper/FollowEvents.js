import React, { Component } from 'react';
import { CompassOutlined } from '@ant-design/icons';
import { Statistic, Row, Col } from 'antd';

class FollowEvents extends Component {
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={10}>
            <Statistic
              title="Ακολουθεί Events"
              value={0}
              prefix={<CompassOutlined />}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default FollowEvents;
