import React, { Component } from 'react';
import { logout } from '../actions/authActions';
import PropTypes from 'prop-types';
import { EditOutlined, LogoutOutlined } from '@ant-design/icons';
import { Menu, Select, Dropdown } from 'antd';

import { connect } from 'react-redux';

const { Options } = Select;

class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="">
            Επεξεργασία
            <EditOutlined style={{ marginLeft: '10px' }} />
          </a>
        </Menu.Item>
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
            <a
              className="ant-dropdown-link"
              href="#"
              style={{ display: 'inline-block' }}
            >
              Panos61
            </a>
          </Dropdown>
        </Menu.Item>
      </div>
    );
  }
}

export default connect(null, { logout })(Logout);
