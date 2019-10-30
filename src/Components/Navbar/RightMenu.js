import React, { Component } from 'react';
import { Menu } from 'antd';
import HowWorks from './HowWorksDrawer';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import CardLoginStyle from '../LoginForm/LoginFormStyle';
import CardRegisterStyle from '../RegisterForm/SignUpStyle';

class RightMenu extends Component {
  render() {
    return (
      <div>
        <Menu mode={this.props.mode}>
          <Menu.Item key='howWorks'>
            <HowWorks />
          </Menu.Item>

          <Menu.Item key='mail'>
            {/* <a href='#'>Σύνδεση</a> */}
            <Link to='/login'>Σύνδεση</Link>
          </Menu.Item>

          <Menu.Item key='app'>
            {/* <a href='#'>Εγγραφή</a> */}
            <Link to='/register'>Εγγραφή</Link>
          </Menu.Item>
        </Menu>
        <Route path='/login' Component={CardLoginStyle} />
        <Route path='/register' Component={CardRegisterStyle} />
      </div>
    );
  }
}

export default RightMenu;
