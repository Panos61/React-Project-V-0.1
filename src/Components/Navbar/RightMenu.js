import React, { Component } from 'react';
import { Menu, Select, Dropdown, Icon } from 'antd';
import HowWorks from './HowWorksDrawer';
import { Link, Route } from 'react-router-dom';
import CardLoginStyle from '../LoginForm/LoginFormStyle';
import CardRegisterStyle from '../RegisterForm/SignUpStyle';

const { Option } = Select;

function handleChange(value) {
  console.log(`Selected ${value}`);
}

class RightMenu extends Component {
  render() {
    //Prototype
    // const menu = (
    //   <Menu>
    //     <Menu.Item key="0">
    //       <a href="">
    //         Επεξεργασία
    //         <Icon type="edit" style={{ marginLeft: "10px" }} />
    //       </a>
    //     </Menu.Item>
    //     <Menu.Item key="1">
    //       <a href="">
    //         Αποσύνδεση
    //         <Icon type="logout" style={{ marginLeft: "11px" }} />
    //       </a>
    //     </Menu.Item>
    //   </Menu>
    // );
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

          {/* <Menu.Item key="#">
            <Dropdown overlay={menu} trigger={["click"]}>
              <a
                className="ant-dropdown-link"
                href="#"
                style={{ display: "inline-block" }}
              >
                Panos61
                 /> 
              </a>
            </Dropdown>
          </Menu.Item> */}

          <Menu.Item key="mail">
            <Link to="/login">Σύνδεση</Link>
          </Menu.Item>

          <Menu.Item key="app">
            <Link to="/register">Εγγραφή</Link>
          </Menu.Item>
        </Menu>

        <Route path="/login" Component={CardLoginStyle} />
        <Route path="/register" Component={CardRegisterStyle} />
      </div>
    );
  }
}

export default RightMenu;
