import React, { Component } from 'react';
import { Button, Icon } from 'antd';

class SettingsBtn extends React.Component {
  state = {
    size: 'large'
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Button type="secondary" shape="circle" icon="setting" size={size} />
      </div>
    );
  }
}

export default SettingsBtn;
