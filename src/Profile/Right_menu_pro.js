import React, { Component, Fragment } from 'react';
import { Menu, Select } from 'antd';
import { Link, Route } from 'react-router-dom';
import CardLoginStyle from '../Components/LoginForm/LoginFormStyle';
import CardRegisterStyle from '../Components/RegisterForm/SignUpStyle';
import SearchBar from './Search-Bar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Logout from '../Components/Logout';

const { Option } = Select;

function handleChange(value) {
  console.log(`Selected ${value}`);
}

class Right_menu_pro extends Component {
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
          {/* <Menu.Item
            style={{ display: 'inline-block', top: '-5px', right: '30vh' }}
          >
            <SearchBar />
          </Menu.Item> */}
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

          <Menu.Item style={{ display: 'inline-table' }}>
            {isAuthenticated ? authLinks : guestLinks}
          </Menu.Item>
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

export default connect(mapStateToProps, null)(Right_menu_pro);
