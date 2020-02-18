import React, { Component } from 'react';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import { Drawer, Button, Icon, Divider } from 'antd';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
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
      <nav className="menu">
        <div className="menu__logo">
          <Link
            to="/"
            style={{
              color: '#9932CC',
              fontSize: '22px',
              fontFamily: 'Pacifico, cursive'
            }}
          >
            Event
            <span style={{ color: '#7cb305' }}>Park</span>
          </Link>
        </div>
        <div className="menu__container">
          <div className="menu_left">
            <LeftMenu mode="horizontal" />
          </div>
          <div className="menu_right">
            <RightMenu mode="horizontal" />
          </div>
          <Button
            className="menu__mobile-button"
            type="primary"
            onClick={this.showDrawer}
          >
            <Icon type="align-right" />
          </Button>
          <Drawer
            title="Μενού"
            placement="right"
            className="menu_drawer"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <LeftMenu mode="inline" />
            <Divider dashed />
            <RightMenu mode="inline" />
            <Divider dashed />

            <Link
              to="/Help"
              style={{
                color: '#330033',
                marginLeft: '23px',
                fontSize: '15px',
                fontFamily: 'cursive'
              }}
            >
              Υποστήριξη
            </Link>
          </Drawer>
        </div>
      </nav>
    );
  }
}

export default Navbar;
