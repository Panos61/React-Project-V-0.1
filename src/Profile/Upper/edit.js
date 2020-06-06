import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { UploadOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  InputNumber,
  Button,
  Tabs,
  Upload,
  message,
  Divider,
} from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../store/modules/profile/actions/profileActions';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: 'This field is required!',
  types: {
    email: 'Not a validate email!',
    number: 'Not a validate number!',
    pattern: 'ddd',
  },
  number: {
    range: '12 εώς 75 χρονών!',
  },
};

const { TabPane } = Tabs;
const { TextArea } = Input;

// ** AVATAR UPLOAD **
const props = {
  name: 'file',
  headers: {
    authorization: 'authorization-text',
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
  },
};

const ProfileEdit = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.Auth);
  const authID = currentUser.Auth ? currentUser.currentUser.id : '';

  const update = (id) => dispatch(updateProfile(id));

  const onUpdate = (e) => {
    update(authID);
    e.preventDefault();
  };

  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Γενικά" key="1">
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onUpdate}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={['name']}
              label="Nickname"
              rules={[
                {
                  min: 4,
                  max: 9,
                  //pattern: /^[a-z]{3,}?[_.]{1}$/
                },
              ]}
            >
              <Input
                prefix={<span>@</span>}
                // defaultValue={profileData ? `${profileData.name}` : null}
              />
            </Form.Item>
            <Form.Item name={['introduction']} label="Περιγραφή">
              <TextArea
              // placeholder={
              //   profileData ? `${profileData.introduction}` : null
              // }
              />
            </Form.Item>
            <Form.Item
              name={['age']}
              label="Ηλικία"
              rules={[
                {
                  type: 'number',
                  min: 12,
                  max: 79,
                },
              ]}
            >
              <InputNumber
              // placeholder={profileData ? `${profileData.age}` : null}
              />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="danger" htmlType="submit">
                Αποθήκευση Στοιχείων
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab="Λογαριασμός" key="2">
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onUpdate}
            validateMessages={validateMessages}
          >
            <Form.Item label="Αλλαγή Προφίλ :">
              <Upload {...props}>
                <Button>
                  <UploadOutlined /> Κάνε κλικ!
                </Button>
              </Upload>
            </Form.Item>
            <Divider />

            <Form.Item>
              <Button type="danger">
                <Link to="/security">Ασφάλεια και Σύνδεση</Link>
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ProfileEdit;
