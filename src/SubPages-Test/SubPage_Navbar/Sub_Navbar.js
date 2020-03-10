import React, { Component } from 'react';
import LeftMenu_Sub from './LeftMenu_Sub';
import RightMenu_Sub from './RightMenu_Sub';
import { AlignRightOutlined } from '@ant-design/icons';
import { Drawer, Button, Divider } from 'antd';
import { Link } from 'react-router-dom';

import './Sub_Navbar.css';

class Sub_Navbar extends Component {
  state = {
    visible: false
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <nav className="menu" style={{ zIndex: '10' }}>
        <div className="menu__logo">
          <Link
            to="/"
            style={{
              color: 'black',
              fontSize: '22px',
              fontFamily: 'Pacifico, cursive'
            }}
          >
            Event
            <span style={{ color: '#fa8c16' }}>Park</span>
          </Link>
        </div>
        <div className="menu__container">
          <div className="menu_left">
            <LeftMenu_Sub mode="horizontal" />
          </div>
          <div className="menu_right">
            <RightMenu_Sub mode="horizontal" />
          </div>
          <Button
            className="menu__mobile-button"
            type="primary"
            onClick={this.showDrawer}
          >
            <AlignRightOutlined />
          </Button>
          <Drawer
            title="Μενού"
            placement="right"
            className="menu_drawer"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <LeftMenu_Sub mode="inline" />
            <Divider dashed />
            <RightMenu_Sub mode="inline" />
          </Drawer>
        </div>
      </nav>
    );
  }
}

export default Sub_Navbar;
