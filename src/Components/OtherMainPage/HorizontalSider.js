import React from 'react';

import {
  EnvironmentOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  PlusOutlined,
  RiseOutlined,
  ScheduleOutlined,
} from '@ant-design/icons';

import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sider = Layout;

const HorizontalSider = () => {
  const currentState = useSelector((state) => state);
  const { isAuthenticated } = currentState.Profile;

  const profileRoute = isAuthenticated
    ? `/profile/${currentState.Profile.currentProfileState.id}`
    : '';

  return (
    <div>
      <Sider collapsible>
        <div className="logo" />
        <Menu theme="light" defaultSelectedKeys={['1']} mode="horizontal">
          <Menu.Item key="1" disabled>
            <EnvironmentOutlined />
            <span>Τοποθεσία</span>
          </Menu.Item>
          <Menu.Item key="2">
            <RiseOutlined />
            <span>Δημοφιλές</span>
          </Menu.Item>
          <Menu.Item key="6">
            <PlusOutlined />
            <Link to="/create-event" style={{ display: 'inline' }}>
              Προσθήκη
            </Link>
          </Menu.Item>

          <Menu.Item key="7">
            <HomeOutlined />
            <Link to={profileRoute} style={{ display: 'inline' }}>
              Προφίλ
            </Link>
          </Menu.Item>

          <Menu.Item key="9">
            <InfoCircleOutlined />
            <Link to="/home" style={{ display: 'inline' }}>
              Υποστήριξη
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
};

export default HorizontalSider;
