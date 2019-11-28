import React, { Component } from 'react';
import { Menu } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LeftMenu extends Component {
  render() {
    return (
      <Menu mode={this.props.mode}>
        <Menu.Item key='music'>
          <a href='#' style={{ color: 'maroon' }}>
            Μουσική
          </a>
        </Menu.Item>
        <Menu.Item key='sport'>
          <a href='#' style={{ color: '#69c0ff' }}>
            Αθλητισμός
          </a>
        </Menu.Item>
        <Menu.Item key='enter'>
          <a href='#' style={{ color: '#eb2f96' }}>
            Διασκέδαση
          </a>
        </Menu.Item>
        <SubMenu title={<span style={{ color: 'grey' }}>Λοιπά</span>}>
          <MenuItemGroup title='Κατηγορίες'>
            <Menu.Item key='setting:1'>
              <a href='#' style={{ color: '#fa541c' }}>
                Σινεμά
              </a>
            </Menu.Item>
            <Menu.Item key='setting:2'>
              <a href='#' style={{ color: '#faad14' }}>
                Τέχνες
              </a>
            </Menu.Item>
            <Menu.Item key='setting:3'>
              <a href='#' style={{ color: 'brown' }}>
                Χορός
              </a>
            </Menu.Item>
            <Menu.Item key='setting:4'>
              <a href='#' style={{ color: '#096dd9' }}>
                Παιδικά
              </a>
            </Menu.Item>
            <Menu.Item key='setting:5'>
              <a href='#' style={{ color: 'yellowgreen' }}>
                Social_Events
              </a>
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}

export default LeftMenu;
