import React from 'react';
import { logout } from '../store/modules/auth/actions/authActions';
import { LogoutOutlined, EditOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Logout = () => {
  const currentState = useSelector((state) => state);
  const { isAuthenticated, currentUser } = currentState.Auth;

  const dispatch = useDispatch();

  const logoutUser = () => dispatch(logout());

  const userSettings = isAuthenticated
    ? `/settings/${currentState.Auth.currentUser.id}`
    : '';

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to={userSettings}>
          Λογαριασμός
          <EditOutlined style={{ marginLeft: '9px' }} />
        </Link>
      </Menu.Item>
      <Menu.Item key="1">
        <span onClick={logoutUser}>
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
            <span
              style={{
                position: 'relative',
                top: '22%',
              }}
            >
              {currentUser ? `Κάλως όρισες ${currentUser.username}` : null}
            </span>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Logout;
