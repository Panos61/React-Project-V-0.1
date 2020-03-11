import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

class LoginNav extends Component {
  render() {
    return (
      <div>
        <Menu key="login" style={{ display: 'inline-block' }}>
          <Menu.Item>
            <Link to="/login">Σύνδεση</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default LoginNav;
