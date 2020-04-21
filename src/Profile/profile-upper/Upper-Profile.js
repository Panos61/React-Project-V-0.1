import './Upper-Profile.css';
import React, { Component } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Divider, Descriptions } from 'antd';
import { Col, Row } from 'react-flexbox-grid';
import ProfileBio from './Pro-bio';
import Username from './Username';
import UserSettings from './User-settings';
import FollowersView from './Followers-view';
import EventsUploaded from './EventsUploaded';
import HorizontalTabs from './Horizontal-Tabs';
import FollowEvents from './FollowEvents';
import Message from './Message';
import SettingsBtn from './settings-btn';

import store from '../../store';
import { Provider } from 'react-redux';

class UpperProfile extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Row
            style={{
              top: '100px',
              position: 'relative',
            }}
            around="xs"
          >
            <Col xs={12} lg={6}>
              <Row center="xs">
                <Col xs md={3}>
                  <Avatar size={105} icon={<UserOutlined />} />
                  <div style={{ top: '5vh', position: 'relative' }}>
                    <Message />
                    <SettingsBtn />
                  </div>
                </Col>
                <Col xs md={3}>
                  <Username />
                  <UserSettings />
                </Col>
                <Descriptions
                  column={3}
                  layout="vertical"
                  style={{ marginTop: '35px', padding: '50px' }}
                >
                  <Descriptions.Item>
                    <EventsUploaded />
                  </Descriptions.Item>
                  <Descriptions.Item>
                    <FollowersView />
                  </Descriptions.Item>
                  <Descriptions.Item>
                    <FollowEvents />
                  </Descriptions.Item>
                </Descriptions>

                <Col xs={12} style={{ marginTop: '-55px' }}>
                  <ProfileBio />
                </Col>
                <Divider />
                <HorizontalTabs />
              </Row>
            </Col>
          </Row>
        </Provider>
      </div>
    );
  }
}

export default UpperProfile;
