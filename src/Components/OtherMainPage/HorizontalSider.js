import React, { Component } from 'react';

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

const Sider = Layout;
const { SubMenu } = Menu;

class HorizontalSider extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <div>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="light" defaultSelectedKeys={['1']} mode="horizontal">
            <Menu.Item key="1" disabled>
              <EnvironmentOutlined />
              <span>Τοποθεσία</span>
            </Menu.Item>
            {/* <Menu.Item key="2">
              <RiseOutlined />
              <span>Δημοφιλές</span>
            </Menu.Item> */}
            <Menu.Item key="6">
              <PlusOutlined />
              <Link to="/createEvent" style={{ display: 'inline' }}>
                Προσθήκη
              </Link>
            </Menu.Item>
            <Menu.Item key="7">
              <HomeOutlined />
              <Link to="/profile" style={{ display: 'inline' }}>
                Προφίλ
              </Link>
            </Menu.Item>
            {/* <SubMenu
              key="sub2"
              title={
                <span>
                  <HomeOutlined />
                  <span>Προφίλ</span>
                </span>
              }
            >
              <Menu.Item key="6">
                <PlusOutlined />
                <Link to="/createEvent" style={{ display: 'inline' }}>
                  Προσθήκη
                </Link>
              </Menu.Item>
              <Menu.Item key="8">
                <ScheduleOutlined />
                <Link to="/profile" style={{ display: 'inline' }}>
                  Τοίχος
                </Link>
              </Menu.Item>
            </SubMenu> */}
            <Menu.Item key="9">
              <InfoCircleOutlined />
              <Link to="/help" style={{ display: 'inline' }}>
                Υποστήριξη
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
      </div>
    );
  }
}

export default HorizontalSider;
