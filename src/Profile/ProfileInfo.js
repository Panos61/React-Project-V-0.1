import React, { useState } from 'react';
import './proInfo.css';
import styled from 'styled-components';
import { Avatar, Divider, Button, Modal, Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import store from '../store/index';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateProfile } from '../store/modules/profile/actions/profileActions';

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

  .profile-edit-btn {
    left: 50%;
    position: absolute;
    top: 21%;
  }

  @media screen and (min-width: 1050px) {
    .profile-edit-btn {
      position: absolute;
      top: 21%;
      left: 41%;
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

  const updatePro = (values) => {
    dispatch(updateProfile(values));
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const currentUserState = useSelector((state) => state.Auth);

  // Form Layout
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
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

          <div className="profile-edit-btn">
            <Button
              size="large"
              shape="round"
              type="default"
              onClick={() => setVisible(true)}
            >
              Επεξεργασία
            </Button>
          </div>
          <Divider />
        </Wrapper>

        {/* ADD PROFILE DATA MODAL */}
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
          ]}
        >
          <Form onFinish={updatePro} {...layout}>
            <Form.Item name="firstName" label="firstname">
              <Input />
            </Form.Item>
            <Form.Item name="lastName" label="lastname">
              <Input />
            </Form.Item>
            <Form.Item name="introduction" label="introduction">
              <Input />
            </Form.Item>
            <Form.Item name="age" label="age">
              <Input />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button htmlType="submit" onClick={() => setVisible(false)}>
                Ενημέρωση
              </Button>
              <Button htmlType="button">Reset</Button>
              <Button type="link" htmlType="button">
                Fill form
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Provider>
    </>
  );
};

export default ProfileInfo;
