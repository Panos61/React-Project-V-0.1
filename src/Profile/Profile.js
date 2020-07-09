import React from 'react';
import styled from 'styled-components';
import Header from '../Feed/Components/Header';
import ProfileInfo from './ProfileInfo';
import store from '../store/index';
import { Provider, useSelector, useDispatch } from 'react-redux';

const Wrapper = styled.div`
  margin-bottom: 7rem;
  .profile-top {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    span.tweetsCount {
      margin-top: 0.1rem;
      font-size: 0.9rem;
    }
  }
`;
const Profile = () => {
  const currentUserState = useSelector((state) => state.Auth);
  return (
    <>
      <Provider store={store}>
        <Wrapper>
          <Header>
            <div className="profile-top">
              <p>
                {' '}
                {currentUserState.currentUser
                  ? `${currentUserState.currentUser.username}`
                  : null}
              </p>
            </div>
          </Header>
          <ProfileInfo />
        </Wrapper>
      </Provider>
    </>
  );
};

export default Profile;
