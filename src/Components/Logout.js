import React, { Component } from 'react';
import { logout } from '../store/modules/auth/actions/authActions';
import PropTypes from 'prop-types';
import { LogoutOutlined, EditOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    Auth: PropTypes.object.isRequired,
  };

  render() {
    const { user } = this.props.Auth;

    const menu = (
      <Menu>
        <Menu.Item key="0">
          <Link to="/security">
            Λογαριασμός
            <EditOutlined style={{ marginLeft: '9px' }} />
          </Link>
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
  Auth: state.Auth,
});

export default connect(mapStateToProps, { logout })(Logout);
