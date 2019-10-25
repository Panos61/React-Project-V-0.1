import { Button, Icon } from 'antd';
import React, { Component } from 'react';

class BtnPopular extends React.Component {
  state = {
    size: 'medium'
  };

  handleSize = (e) => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Button type='primary' icon='rise' size={size}>
          Δημοφιλές
        </Button>
      </div>
    );
  }
}

export default BtnPopular;
