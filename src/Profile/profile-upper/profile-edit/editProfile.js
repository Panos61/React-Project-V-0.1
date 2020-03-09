import React, { Component } from 'react';
import { Form, Input } from 'antd';

class ProfileEdit extends Component {
  render() {
    return (
      <div>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!'
              }
            ]}
          >
            <Input placeholder="Username" />
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default ProfileEdit;
