import React, { Component } from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

class Username extends React.Component {
  render() {
    return (
      <div>
        <Title
          level={2}
          style={{
            fontFamily: 'Georgia',
            fontWeight: 'initial'
          }}
        >
          Panos61_
        </Title>
        <br />
      </div>
    );
  }
}

export default Username;
