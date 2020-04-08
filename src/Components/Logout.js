import React, { Component } from 'react';
import { logout } from '../actions/authActions';
import PropTypes from 'prop-types';
import { LogoutOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';

import { connect } from 'react-redux';

class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
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
        <Menu>
          <Menu.Item key="#">
            <Dropdown overlay={menu} trigger={['click']}>
              <span>{user ? `Κάλως όρισες ${user.username}` : null}</span>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Logout);
