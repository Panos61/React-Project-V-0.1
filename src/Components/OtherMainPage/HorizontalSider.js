import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const Sider = Layout;
/* const { SubMenu } = Menu; */

class HorizontalSider extends Component {
  state = {
    collapsed: false
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <div>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className='logo' />
          <Menu theme='light' defaultSelectedKeys={['1']} mode='horizontal'>
            <Menu.Item key='1' disabled>
              <Icon type='environment' />
              <span>Τοποθεσία</span>
            </Menu.Item>
            <Menu.Item key='2'>
              <Icon type='rise' />
              <span>Δημοφιλές</span>
            </Menu.Item>

            {/* <SubMenu
              key='sub2'
              title={
                <span>
                  <Icon type='team' />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key='6'>Team 1</Menu.Item>
              <Menu.Item key='8'>Team 2</Menu.Item>
            </SubMenu> */}
            <Menu.Item key='9'>
              <Icon type='info-circle' />
              <Link to='/Help' style={{ display: 'inline' }}>
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
