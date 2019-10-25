import React, { Component } from 'react';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import { Drawer, Button, Icon, Divider } from 'antd';
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
      <nav className='menu'>
        <div className='menu__logo'>
          <a href='' style={{ color: 'black', fontSize: '22px' }}>
            EventPark
          </a>
        </div>
        <div className='menu__container'>
          <div className='menu_left'>
            <LeftMenu mode='horizontal' />
          </div>
          <div className='menu_right'>
            <RightMenu mode='horizontal' />
          </div>
          <Button className='menu__mobile-button' type='primary' onClick={this.showDrawer}>
            <Icon type='align-right' />
          </Button>
          <Drawer
            title='Μενού'
            placement='right'
            className='menu_drawer'
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <LeftMenu mode='inline' />
            <Divider dashed />
            <RightMenu mode='inline' />
          </Drawer>
        </div>
      </nav>
    );
  }
}

export default Navbar;
