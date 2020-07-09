import React, { useState } from 'react';
import './proInfo.css';
import styled from 'styled-components';
import { Avatar, Divider, Button, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import store from '../store/index';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

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

  // .profile-edit-btn {
  //   position: relative;
  //   left: 30%;
  // }

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

  @media screen and (max-width: 550px) {
    .profile-edit-btn {
      margin-top: 1rem;
      margin-left: 2rem;
    }
  }
`;

const ProfileInfo = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

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
          {/* 
          <div className="profile-edit-btn">
            <Button
              size="large"
              shape="round"
              type="default"
              onClick={() => setVisible(true)}
            >
              Επεξεργασία
            </Button>
          </div> */}
          <Divider />
        </Wrapper>

        <Modal
          closable={false}
          visible={visible}
          title="Επεξεργασία προφίλ"
          footer={[
            <Button
              key="submit"
              type="dashed"
              onClick={() => setVisible(false)}
            >
              Ακύρωση
            </Button>,
            <Button key="submit" type="primary">
              Ενημέρωση
            </Button>,
          ]}
        >
          <p>...</p>
          <p>...</p>
          <p>...</p>
        </Modal>
      </Provider>
    </>
  );
};

export default ProfileInfo;
