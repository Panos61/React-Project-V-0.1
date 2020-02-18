import React, { Component } from 'react';
import { Menu } from 'antd';

class Left_menu_pro extends Component {
  render() {
    return (
      <div>
        <Menu mode={this.props.mode}></Menu>
      </div>
    );
  }
}

export default Left_menu_pro;
