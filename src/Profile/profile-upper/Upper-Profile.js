import './Upper-Profile.css';
import React, { Component } from 'react';
import { Avatar, Divider } from 'antd';
import { Col, Row } from 'react-flexbox-grid';
import ProfileBio from './Pro-bio';
import Username from './Username';
import UserSettings from './User-settings';
import FollowersView from './Followers-view';
import EventsUploaded from './EventsUploaded';
//import SettingsBtn from './settings-btn';

class UpperProfile extends React.Component {
  render() {
    return (
      <div>
        <Row
          style={{
            top: '100px',
            position: 'relative',
            backgroundColor: 'azure'
          }}
          around="xs"
        >
          <Col xs={12} lg={6}>
            <Row center="xs">
              <Col xs md={3}>
                <Avatar size={105} icon="user" />
              </Col>
              <Col xs md={3}>
                <Username />
                <UserSettings />
              </Col>

              <Row center="lg">
                <Col xsOffset={10} style={{ top: '1vh', position: 'relative' }}>
                  <FollowersView />
                </Col>
                <Col xsOffset={10} style={{ top: '1vh', position: 'relative' }}>
                  <EventsUploaded />
                </Col>
              </Row>
              <Col xs={12}>
                <ProfileBio />
              </Col>
            </Row>
            <Divider />
          </Col>
        </Row>
      </div>
    );
  }
}

export default UpperProfile;
