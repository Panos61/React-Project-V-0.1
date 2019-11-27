import React, { Component } from 'react';
import { Menu } from 'antd';

class LeftMenu_Sub extends Component {
  render() {
    return <Menu mode={this.props.mode}></Menu>;
  }
}

export default LeftMenu_Sub;
