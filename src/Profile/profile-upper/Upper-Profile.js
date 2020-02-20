import './Upper-Profile.css';
import React, { Component } from 'react';
import { Avatar, Divider } from 'antd';
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

class UpperProfile extends Component {
  render() {
    return (
      <div>
        <Row
          style={{
            top: '100px',
            position: 'relative'
          }}
          around="xs"
        >
          <Col xs={12} lg={6}>
            <Row center="xs">
              <Col xs md={3}>
                <Avatar size={105} icon="user" />
                <div style={{ top: '5vh', position: 'relative' }}>
                  <Message />
                  <SettingsBtn />
                </div>
              </Col>
              <Col xs md={3}>
                <Username />
                <UserSettings />
              </Col>

              <Col xsOffset={10} style={{ top: '1vh', position: 'relative' }}>
                <FollowersView />
              </Col>
              <Col xsOffset={10} style={{ top: '1vh', position: 'relative' }}>
                <EventsUploaded />
                <FollowEvents />
              </Col>

              <Col xs={12}>
                <ProfileBio />
              </Col>
              <Divider />
              <HorizontalTabs />
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UpperProfile;
