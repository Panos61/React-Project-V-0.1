import React, { Component } from 'react';
import { Menu, Drawer } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import CardRegisterStyle from '../RegisterForm/SignUpStyle';

class RightMenu extends Component {
  render() {
    return (
      <Router>
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
      </Router>
    );
  }
}

export default RightMenu;
