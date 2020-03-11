import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { UploadOutlined } from '@ant-design/icons';
import { Form, Input, InputNumber, Button, Tabs, Upload, message } from 'antd';

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const validateMessages = {
  required: 'This field is required!',
  types: {
    email: 'Not a validate email!',
    number: 'Not a validate number!',
    pattern: 'ddd'
  },
  number: {
    range: 'Μεταξύ 4 εως 9 χαρακτήρων'
  }
};

const { TabPane } = Tabs;

// ** AVATAR UPLOAD **
const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text'
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

class ProfileEdit extends Component {
  render() {
    const onFinish = values => {
      console.log(values);
    };
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Γενικά" key="1">
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              //validateMessages={validateMessages}
            >
              <Form.Item
                name={['user', 'name']}
                label="Nickname"
                rules={[
                  {
                    min: 4,
                    max: 9,
                    pattern: /^[a-z]{3,}?[_.]{1}$/
                  }
                ]}
              >
                <Input prefix={<span>@</span>} />
              </Form.Item>
              <Form.Item name={['user', 'introduction']} label="Περιγραφή">
                <Input.TextArea placeholder="Εισάγετε μια χαρακτηριστική περιγραφή του Προφίλ σας (εώς 150 χαρακτήρες)" />
              </Form.Item>
              <Form.Item
                name={['user', 'age']}
                label="Ηλικία"
                rules={[
                  {
                    type: 'number',
                    min: 12,
                    max: 79
                  }
                ]}
              >
                <InputNumber />
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="Λογαριασμός" key="2">
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <Form.Item label="Αλλαγή Προφίλ">
                <Upload {...props}>
                  <Button>
                    <UploadOutlined /> Click to Upload
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name={['user', 'email']}
                label="Αλλαγή E-mail"
                rules={[
                  {
                    type: 'email'
                  }
                ]}
              >
                <Input placeholder="Εισάγετε το νέο σας E-mail" />
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default ProfileEdit;
