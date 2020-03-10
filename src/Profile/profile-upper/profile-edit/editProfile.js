import React, { Component } from 'react';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Input, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

class ProfileEdit extends Component {
  render() {
    return (
      <div>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
        >
          <Form.Item>
            <Input
              placeholder="Enter your username"
              prefix={<span>@</span>}
              suffix={
                <Tooltip title="Extra information">
                  <InfoCircleOutlined />
                </Tooltip>
              }
            />
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default ProfileEdit;
