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
        <span style={{ position: 'relative', top: '15px', cursor: 'pointer' }}>
          <Icon type="setting" theme="filled" />{' '}
        </span>
      </div>
    );
  }
}

export default SettingsBtn;
