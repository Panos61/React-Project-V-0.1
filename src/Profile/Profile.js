import React from 'react';
import styled from 'styled-components';
import Header from '../Feed/Components/Header';
import ProfileInfo from './ProfileInfo';
import store from '../store/index';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { Tabs, Button, Menu, Dropdown } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import {
  FlagFilled,
  EllipsisOutlined,
  ClearOutlined,
  MessageOutlined,
} from '@ant-design/icons';

const { TabPane } = Tabs;

// User Report-Block Interactivity Menu Button
const reportMenu = (
  <Menu>
    <Menu.Item key="report" icon={<FlagFilled />}>
      Αναφορά
    </Menu.Item>
    <Menu.Item key="block" icon={<ClearOutlined />}>
      Αποκλεισμός
    </Menu.Item>
  </Menu>
);

const xtoperation = (
  <Dropdown.Button
    overlay={reportMenu}
    icon={<EllipsisOutlined />}
    id="profile-extra-button"
  >
    <span style={{ marginRight: '5px' }}>
      <MessageOutlined />
    </span>
    Μύνημα
  </Dropdown.Button>
);

const Wrapper = styled.div`
  margin-bottom: 7rem;
  .profile-top {
    display: flex;
    flex-direction: row;
    margin-left: 1rem;
    span.tweetsCount {
      margin-top: 0.1rem;
      font-size: 0.9rem;
    }
  }

  @media screen and (max-width: 550px) {
    #profile-extra-button {
      display: none;
    }
  }
`;
const Profile = () => {
  const currentProfileState = useSelector((state) => state.Profile);

  // Redirect user to login page in case
  // he is not authenticated and enters the URL manually
  localStorage.getItem('token');
  if (!localStorage.token) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Provider store={store}>
        <Wrapper>
          <Header>
            <div className="profile-top">
              <p>
                {' '}
                {currentProfileState.profile
                  ? `${currentProfileState.profile.firstName}`
                  : null}
              </p>

              <p style={{ marginLeft: '5px' }}>
                {' '}
                {currentProfileState.profile
                  ? `${currentProfileState.profile.lastName}`
                  : null}
              </p>
            </div>
          </Header>
          <ProfileInfo />

          <Tabs defaultActiveKey="1" centered style={{ textAlign: 'center' }}>
            <TabPane tab="Δραστηριότητα" key="1">
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
            </TabPane>
            <TabPane tab="Φωτογραφίες" key="2">
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
            </TabPane>
          </Tabs>
        </Wrapper>
      </Provider>
    </>
  );
};

export default Profile;
