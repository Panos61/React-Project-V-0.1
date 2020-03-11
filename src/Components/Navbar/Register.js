import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

class RegisterNav extends Component {
  render() {
    return (
      <div>
        <Menu key="register" style={{ display: 'inline-block' }}>
          <Menu.Item>
            <Link to="/login">Εγγραφή</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default RegisterNav;
