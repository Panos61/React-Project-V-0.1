import React, { Component } from 'react';
import { Statistic, Row, Col, Icon } from 'antd';

class EventsUploaded extends React.Component {
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={10}>
            <Statistic
              title="Events"
              value={3}
              prefix={<Icon type="calendar" />}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default EventsUploaded;
