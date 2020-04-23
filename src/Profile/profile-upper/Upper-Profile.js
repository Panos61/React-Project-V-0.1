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
                <Col xs md={3} style={{ position: 'relative', right: '3.5%' }}>
                  <Avatar size={105} icon={<UserOutlined />} />
                  <div style={{ top: '2vh', position: 'relative' }}>
                    <SettingsBtn />
                  </div>
                </Col>
                <Col xs md={3} style={{ position: 'relative', right: '7%' }}>
                  <Username />
                  <div style={{ display: 'block' }}>
                    <UserSettings />
                    <div style={{ marginTop: '10px' }}>
                      <Message />
                    </div>
                  </div>
                </Col>

                <Col xs={12} style={{ marginBottom: '-15px' }}>
                  <ProfileBio />
                </Col>
                <Divider />
                <Row
                  style={{
                    marginBottom: '-25px',
                    marginTop: '-5px',
                    fontSize: '2px',
                    display: 'inline-block',
                  }}
                >
                  <Col lg={12} lgOffset={1}>
                    <Descriptions
                      column={3}
                      layout="horizontal"
                      style={{
                        margin: '2px',
                      }}
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
                  </Col>
                </Row>
                <Divider />
                <div style={{ marginTop: '-10px' }}>
                  <HorizontalTabs />
                </div>
              </Row>
            </Col>
          </Row>
        </Provider>
      </div>
    );
  }
}

export default UpperProfile;
