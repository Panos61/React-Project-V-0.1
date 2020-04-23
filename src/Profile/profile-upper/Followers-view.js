import React, { Component } from 'react';
//import { TeamOutlined } from '@ant-design/icons';
import { Statistic, Row, Col } from 'antd';

class FollowersView extends Component {
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={10}>
            <Statistic title="Ακόλουθοι" value={0} />
            {/* prefix={<TeamOutlined />} */}
          </Col>
        </Row>
      </div>
    );
  }
}

export default FollowersView;
