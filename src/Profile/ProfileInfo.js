import React, { useState } from 'react';
import './proInfo.css';
import styled from 'styled-components';
import { Avatar, Divider, Button, Modal, Form, Input } from 'antd';
import {
  UserOutlined,
  FieldTimeOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
} from '@ant-design/icons';
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
    margin-top: 3%;
    padding-left: 3.2rem;
    .introduction {
      width: 90%;
    }
  }

  .profile-edit-btn {
    left: 50%;
    position: absolute;
    top: 21%;
  }

  div.loc-dob-web {
    display: flex;
    color: ${(props) => props.theme.secondaryColor};
    margin: 1rem 0;
    span {
      margin-right: 1.5rem;
    }
    svg {
      margin-right: 0.2rem;
      position: relative;
      top: 3px;
    }
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
    margin-left: 3rem;
    position: relative;
    top: 15px;
  }

  span.fullname {
    font-weight: 600;
    font-size: 16px;
    margin-left: 3px;
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

    .profile-shared-links {
      position: relative;
      right: 5%;
    }
  }
`;

const ProfileInfo = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const updatePro = (values) => {
    dispatch(updateProfile(values));
  };

  // Redux current state
  const currentUserState = useSelector((state) => state.Auth);
  const currentProfileState = useSelector((state) => state.Profile);

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
            <span className="fullname">
              {currentProfileState.profile
                ? `${currentProfileState.profile.firstName}`
                : null}{' '}
              {currentProfileState.profile
                ? `${currentProfileState.profile.lastName}`
                : null}
            </span>
            <span className="handle">
              {currentUserState.currentUser
                ? `@${currentUserState.currentUser.username}`
                : null}
            </span>
          </div>

          <div className="profile-info">
            <p className="introduction">
              {currentProfileState.profile
                ? `${currentProfileState.profile.introduction}`
                : null}
            </p>
            <Divider />
            <div className="loc-age-link">
              {currentProfileState.profile ? (
                <span>
                  <FieldTimeOutlined /> {currentProfileState.profile.age}{' '}
                </span>
              ) : null}
              <div style={{ marginLeft: '15px', display: 'inline-block' }}>
                {currentProfileState.profile ? (
                  <span>
                    <EnvironmentOutlined />{' '}
                    {currentProfileState.profile.location}{' '}
                  </span>
                ) : null}
              </div>
              <div
                style={{ marginLeft: '15px', display: 'inline-block' }}
                className="profile-shared-links"
              >
                {currentProfileState.profile ? (
                  <span>
                    <FacebookOutlined />{' '}
                    {currentProfileState.profile.sharedLink}{' '}
                  </span>
                ) : null}
              </div>
            </div>
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
          style={{ top: 20 }}
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
            <Form.Item name="firstName" label="Αρχικό">
              <Input
                defaultValue={
                  currentProfileState.profile
                    ? `${currentProfileState.profile.firstName}`
                    : null
                }
              />
            </Form.Item>
            <Form.Item name="lastName" label="Επίθετο">
              <Input
                defaultValue={
                  currentProfileState.profile
                    ? `${currentProfileState.profile.lastName}`
                    : null
                }
              />
            </Form.Item>
            <Form.Item name="introduction" label="Περιγραφή">
              <Input
                defaultValue={
                  currentProfileState.profile
                    ? `${currentProfileState.profile.introduction}`
                    : null
                }
              />
            </Form.Item>
            <Form.Item name="age" label="Ηλικία">
              <Input
                defaultValue={
                  currentProfileState.profile
                    ? `${currentProfileState.profile.age}`
                    : null
                }
              />
            </Form.Item>

            <Form.Item name="location" label="Τοποθεσία">
              <Input
                defaultValue={
                  currentProfileState.profile
                    ? `${currentProfileState.profile.location}`
                    : null
                }
              />
            </Form.Item>

            <Form.Item name="sharedLink" label="Link">
              <Input
                defaultValue={
                  currentProfileState.profile
                    ? `${currentProfileState.profile.sharedLink}`
                    : null
                }
              />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button
                htmlType="submit"
                type="primary"
                onClick={() => setVisible(false)}
              >
                Ενημέρωση
              </Button>
              {'  '}
              <Button type="link" htmlType="button">
                <Link to="/help">Βοήθεια</Link>
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Provider>
    </>
  );
};

export default ProfileInfo;
