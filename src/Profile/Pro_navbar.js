import React, { Component } from 'react';
import Left_menu_pro from './Left_menu_pro';
import Right_menu_pro from './Right_menu_pro';
import { AlignRightOutlined } from '@ant-design/icons';
import { Drawer, Button } from 'antd';
import { Link } from 'react-router-dom';
import App from '../App';

import './pro_navbar.css';

class Pro_navbar extends Component {
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
              color: '#2E8B57',
              fontSize: '26px',
              fontFamily: 'Cookie, cursive'
            }}
          >
            EventPark
          </Link>
        </div>
        <div className="menu__container">
          <div className="menu_left">
            <Left_menu_pro mode="horizontal" />
          </div>
          <div className="menu_right">
            <Right_menu_pro mode="horizontal" />
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
            <Left_menu_pro mode="inline" />
            <Link
              to="/"
              style={{
                fontFamily: 'Pacifico, cursive',
                marginLeft: '23px',
                fontSize: '20px',
                top: '25px',
                position: 'relative'
              }}
            >
              EventPark
            </Link>
            <Right_menu_pro mode="inline" />
          </Drawer>
        </div>
      </nav>
    );
  }
}

export default Pro_navbar;
