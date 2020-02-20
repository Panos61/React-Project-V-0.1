import React, { Component } from 'react';
import { Statistic, Row, Col, Icon } from 'antd';

class FollowEvents extends Component {
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={10}>
            <Statistic
              title="Ακολουθεί Events"
              value={0}
              prefix={<Icon type="compass" />}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default FollowEvents;