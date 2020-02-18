import React, { Component } from 'react';
import { Button, Icon } from 'antd';

class Message extends React.Component {
  render() {
    return (
      <div>
        <Button type="primary" icon="message">
          Μήνυμα
        </Button>
      </div>
    );
  }
}

export default Message;
