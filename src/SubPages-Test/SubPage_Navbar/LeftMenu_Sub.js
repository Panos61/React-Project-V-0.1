import React, { Component } from 'react';
import { Menu } from 'antd';

/* const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup; */

class LeftMenu extends Component {
  render() {
    return <Menu mode={this.props.mode}></Menu>;
  }
}

export default LeftMenu_Sub;
