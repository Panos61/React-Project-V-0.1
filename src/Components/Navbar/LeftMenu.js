import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LeftMenu extends Component {
  render() {
    return (
      <Menu mode={this.props.mode}>
        <Menu.Item key="music">
          <Link to="/music-events" style={{ color: 'maroon' }}>
            Μουσική
          </Link>
        </Menu.Item>
        <Menu.Item key="sport">
          <Link to="/" style={{ color: '#69c0ff' }}>
            Αθλητισμός
          </Link>
        </Menu.Item>
        <Menu.Item key="enter">
          <Link to="/" style={{ color: '#eb2f96' }}>
            Διασκέδαση
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/" style={{ color: '#fa541c' }}>
            Σινεμά
          </Link>
        </Menu.Item>
        <SubMenu title={<span style={{ color: 'grey' }}>Λοιπά</span>}>
          <MenuItemGroup title="Κατηγορίες">
            <Menu.Item key="setting:2">
              <Link to="/" style={{ color: '#faad14' }}>
                Τέχνες
              </Link>
            </Menu.Item>
            <Menu.Item key="setting:3">
              <Link to="/" style={{ color: 'brown' }}>
                Χορός
              </Link>
            </Menu.Item>
            <Menu.Item key="setting:4">
              <Link to="/" style={{ color: '#096dd9' }}>
                Παιδικά
              </Link>
            </Menu.Item>
            <Menu.Item key="setting:5">
              <Link to="/" style={{ color: 'yellowgreen' }}>
                Social_Events
              </Link>
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}

export default LeftMenu;
