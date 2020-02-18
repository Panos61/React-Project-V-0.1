import React, { Component } from 'react';
import { Statistic, Row, Col, Icon } from 'antd';

class FollowersView extends React.Component {
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={10}>
            <Statistic
              title="Ακόλουθοι"
              value={82}
              prefix={<Icon type="team" />}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default FollowersView;
