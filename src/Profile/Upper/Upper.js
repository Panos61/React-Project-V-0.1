import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Divider } from 'antd';

import ProfilePic from '../Components/ProfilePic';
import Bio from '../Components/Bio';
//import Followers from '../Components/Followers';
import Username from '../Components/Username';
import HorizontalTabs from '../HorizontalTabs';

const Upper = () => {
  return (
    <div>
      <Row
        style={{
          top: '100px',
          position: 'relative',
        }}
        around="xs"
      >
        <Col xs={12} lg={6}>
          <Row center="xs">
            <Col xs md={3} style={{ position: 'relative', right: '3.5%' }}>
              <ProfilePic />
              <div style={{ top: '2vh', position: 'relative' }}>
                <h3>Settings</h3>
              </div>
            </Col>
            <Col xs md={4} style={{ position: 'relative', right: '7%' }}>
              <Username />
              <p>Events</p> <br />
              <p>Followers</p> <br />
            </Col>

            <Col xs={12} style={{ marginBottom: '-15px', marginTop: '30px' }}>
              <p>
                This is my profile bio!This is my profile bio!This is my profile
                bio!
              </p>
            </Col>
            <Divider />

            <div style={{ marginTop: '-10px' }}>
              <HorizontalTabs />
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Upper;
