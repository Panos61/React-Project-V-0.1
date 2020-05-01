import React, { Component } from 'react';
import LeftMenu_Help from './LeftMenu_Help';
import RightMenu_Help from './RightMenu_Help';
import { AlignRightOutlined } from '@ant-design/icons';
import { Drawer, Button, Divider } from 'antd';
import { Link } from 'react-router-dom';

import './Help_Navbar.css';

class HelpNavbar extends Component {
  state = {
    visible: false,
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
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
              fontFamily: 'Pacifico, cursive',
            }}
          >
            Event
            <span style={{ color: '#fa8c16' }}>Park</span>
          </Link>
        </div>
        <div className="menu__container">
          <div className="menu_left">
            <LeftMenu_Help mode="horizontal" />
          </div>
          <div className="menu_right">
            <RightMenu_Help mode="horizontal" />
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
            <LeftMenu_Help mode="inline" />
            <Divider dashed />
            <RightMenu_Help mode="inline" />
          </Drawer>
        </div>
      </nav>
    );
  }
}

export default HelpNavbar;
