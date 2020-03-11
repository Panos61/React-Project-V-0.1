import React, { Component } from 'react';
import { logout } from '../actions/authActions';
import PropTypes from 'prop-types';
import { LogoutOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';

import { connect } from 'react-redux';

class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };

  render() {
    const { user } = this.props.auth;

    const menu = (
      <Menu>
        {/* <Menu.Item key="0">
          <a href="">
            Επεξεργασία
            <EditOutlined style={{ marginLeft: '10px' }} />
          </a>
        </Menu.Item> */}
        <Menu.Item key="1">
          <span onClick={this.props.logout}>
            Αποσύνδεση
            <LogoutOutlined style={{ marginLeft: '11px' }} />
          </span>
        </Menu.Item>
      </Menu>
    );

    return (
      <div>
        <Menu.Item key="#">
          <Dropdown overlay={menu} trigger={['click']}>
            <span style={{ display: 'inline-block' }}>
              <span>{user ? `Κάλως όρισες ${user.username}` : ''}</span>
            </span>
          </Dropdown>
        </Menu.Item>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Logout);
