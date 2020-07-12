import React from 'react';
import styled from 'styled-components';
import Header from '../Feed/Components/Header';
import ProfileInfo from './ProfileInfo';
import store from '../store/index';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { Tabs, Button } from 'antd';
import { Link } from 'react-router-dom';

const { TabPane } = Tabs;

const operations = (
  <Button style={{ color: 'green' }}>
    <Link to="create-event">Δημιουργία Event</Link>
  </Button>
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
`;
const Profile = () => {
  const currentProfileState = useSelector((state) => state.Profile);
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
