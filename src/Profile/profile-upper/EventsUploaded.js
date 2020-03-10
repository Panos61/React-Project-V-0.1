import React, { Component } from 'react';
import { CalendarOutlined } from '@ant-design/icons';
import { Statistic, Row, Col } from 'antd';

class EventsUploaded extends Component {
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={10}>
            <Statistic
              title="Events"
              value={0}
              prefix={<CalendarOutlined />}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default EventsUploaded;
