import React, { Component } from 'react';
import { MessageOutlined } from '@ant-design/icons';
import { Button } from 'antd';

class Message extends Component {
  render() {
    return (
      <div>
        <Button type="primary" icon={<MessageOutlined />}>
          Μήνυμα
        </Button>
      </div>
    );
  }
}

export default Message;
