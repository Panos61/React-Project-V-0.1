import React, { Component, Fragment } from 'react';
import { Menu, Select } from 'antd';
import HowWorks from './HowWorksDrawer';
import { Link, Route } from 'react-router-dom';
import CardLoginStyle from '../LoginForm/LoginFormStyle';
import CardRegisterStyle from '../RegisterForm/SignUpStyle';
import Logout from '../../Components/Logout';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const { Option } = Select;

function handleChange(value) {
  console.log(`Selected ${value}`);
}

class RightMenu extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <Fragment>
        <Logout />
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <Menu>
          <Menu.Item style={{ display: 'table' }}>
            <Link to="/login">Σύνδεση</Link>
          </Menu.Item>
        </Menu>
      </Fragment>
    );

    const register = (
      <Fragment>
        <Menu>
          <Menu.Item>
            <Link to="/register">Eggrafh</Link>
          </Menu.Item>
        </Menu>
      </Fragment>
    );

    return (
      <div>
        <Menu mode={this.props.mode}>
          <Select
            defaultValue="Greek"
            style={{
              width: '130px',
              marginBottom: '15px',
              marginRight: '10px',
              marginLeft: '10px'
            }}
            onChange={handleChange}
          >
            <Option value="English">Αγγλικά(ENG)</Option>
            <Option value="Greek">Ελληνικά(GR)</Option>
          </Select>
          <Menu.Item key="howWorks">
            <HowWorks />
          </Menu.Item>
          <Menu.Item>{isAuthenticated ? authLinks : guestLinks}</Menu.Item>
        </Menu>

        <Route path="/login" Component={CardLoginStyle} />
        <Route path="/register" Component={CardRegisterStyle} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(RightMenu);
