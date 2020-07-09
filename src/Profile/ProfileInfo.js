import React from 'react';
import './proInfo.css';
import styled from 'styled-components';
import { Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import store from '../store/index';
import { Provider, useSelector, useDispatch } from 'react-redux';

const Wrapper = styled.div`
  .avatar {
    margin-left: 2rem;
    margin-top: 5rem;
  }

  .profile-info {
    padding-left: 1.4rem;
    .bio {
      width: 90%;
    }
  }

  .profile-name-handle {
    display: flex;
    flex-direction: column;
    margin-left: 3.2rem;
    position: relative;
    top: 15px;
  }

  span.fullname {
    font-weight: bold;
    font-size: 16px;
  }

  @media screen and (max-width: 635px) {
    span {
      margin-bottom: 0.7rem;
    }
  }
`;

const ProfileInfo = () => {
  const currentUserState = useSelector((state) => state.Auth);
  return (
    <>
      <Provider store={store}>
        <Wrapper>
          <Avatar size={130} icon={<UserOutlined />} className="avatar" />
          <div className="profile-name-handle">
            {/* <span className="fullname">
              {currentUserState.currentUser
                ? `${currentUserState.currentUser.username}`
                : null}
            </span> */}
            <span className="handle">
              {currentUserState.currentUser
                ? `@${currentUserState.currentUser.username}`
                : null}
            </span>
          </div>
          <Divider />
        </Wrapper>
      </Provider>
    </>
  );
};

export default ProfileInfo;
