import React, { Component } from 'react';
import { Menu, Drawer } from 'antd';

class RightMenu extends Component {
  render() {
    return (
      <div>
        <Menu mode={this.props.mode}>
          <Menu.Item key='howWorks'>
            <a href='#' style={{ textDecoration: 'underline' }}>
              Πώς λειτουργεί
            </a>
          </Menu.Item>
          <Menu.Item key='mail'>
            <a href='#'>Σύνδεση</a>
          </Menu.Item>
          <Menu.Item key='app'>
            <a href='#'>Εγγραφή</a>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default RightMenu;
