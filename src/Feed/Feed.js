import React from 'react';
import { Row, Col } from 'antd';
import Pro_Navbar from '../Profile/Navbar/Pro_navbar';

const Feed = () => {
  return (
    <div>
      <Pro_Navbar />
      <Row style={{ backgroundColor: '#9B2335', height: '100vh' }}>
        <Col xs={2} md={8} lg={5} style={{ height: '100vh' }}></Col>
        <Col
          sm={22}
          md={16}
          lg={14}
          style={{
            border: '1px solid #eff4ff',
            borderTop: 'none',
            height: '100vh',
          }}
        ></Col>
        <Col sm={0} md={0} lg={5} style={{ height: '100vh' }}></Col>
      </Row>
    </div>
  );
};

export default Feed;
