import React, { Component } from 'react';
import {
  Form,
  Button,
  Select,
  Input,
  Card,
  Avatar,
  TimePicker,
  DatePicker,
  Upload,
  TreeSelect,
  Switch,
} from 'antd';
import {
  UploadOutlined,
  InfoCircleOutlined,
  CloseOutlined,
  CheckOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Success from './success';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const { Option } = Select;
const { TextArea } = Input;
const { Meta } = Card;
const { TreeNode } = TreeSelect;

const onFinish = (values) => {
  console.log(values);
};

class MasterForm extends Component {
  render() {
    return (
      <div>
        <Form {...layout} onFinish={onFinish}>
          <Card
            title="Βήμα 1ο - Γενικά"
            extra={
              <Link to="/help">
                <InfoCircleOutlined />
              </Link>
            }
            style={{ borderColor: '#d9f7be' }}
          >
            <Meta description="Γενικά" />
            <Form.Item
              label="Κατηγορία"
              name="category"
              rules={[{ required: true, message: 'Εισάγετε κατηγορία Event!' }]}
            >
              <Select placeholder="Κατηγορία Event">
                <Option value="Μουσική">Μουσική</Option>
                <Option value="Αθλητισμός">Αθλητισμός</Option>
                <Option value="Διασκέδαση">Διασκέδαση</Option>
                <Option value="Σινεμά">Σινεμά</Option>
                <Option value="Τέχνες">Τέχνες</Option>
                <Option value="Χορός">Χορός</Option>
                <Option value="Παιδικά">Παιδικά</Option>
                <Option value="Social_Events">Social_Events</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Τίτλος Event"
              name="title"
              rules={[
                {
                  required: true,
                  message: 'Εισάγετε τίτλο Event!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Περιγραφή"
              name="description"
              rules={[
                {
                  required: true,
                  message: 'Εισάγετε περιγραφή Event!',
                },
              ]}
            >
              <TextArea rows={5} />
            </Form.Item>

            <Form.Item
              name="avatar"
              label="Προφίλ"
              //rules={[{ required: true, message: 'Εισάγετε προφίλ Event!' }]}
            >
              <Upload>
                <Button>
                  <UploadOutlined /> Κάνε κλικ!
                </Button>
              </Upload>
            </Form.Item>
          </Card>
          <Card
            title="Βήμα 3ο - Ημερομηνία"
            extra={
              <Link to="/help">
                <InfoCircleOutlined />
              </Link>
            }
            style={{
              marginTop: '5vh',
              borderColor: '#b5f5ec',
            }}
          >
            <Meta description="Ημερομηνία" />
            <Form.Item
              label="Είδος"
              name="type"
              rules={[
                {
                  required: true,
                  message: 'Επιλέξτε χρονικό είδος Event!',
                },
              ]}
            >
              <TreeSelect
                placeholder="Είδος Event"
                allowClear
                treeDefaultExpandAll
              >
                <TreeNode value="single" title="Μονό" />
                <TreeNode value="festival" title="Φεστιβάλ" />
              </TreeSelect>
            </Form.Item>
          </Card>
          <Card
            title="Βήμα 5ο - Επιπρόσθετα"
            extra={
              <Link to="/help">
                <InfoCircleOutlined />
              </Link>
            }
            style={{
              marginTop: '5vh',
              borderColor: '#ffccc7',
            }}
          >
            <Meta description="Επιπρόσθετα" />
            <Form.Item label="Σχόλια οργανωτή" name="comments">
              <TextArea rows={2} />
            </Form.Item>
            <Form.Item label="Άνω των 18" name="age-restricted">
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
              />
            </Form.Item>
            <Form.Item label="Πληρωμή" name="payment">
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
              />
            </Form.Item>
          </Card>
          <Form.Item {...tailLayout}>
            <Button
              htmlType="submit"
              type="primary"
              style={{ marginTop: '15px' }}
            >
              <Link to="/event-success">Επιβεβαίωση</Link>
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default MasterForm;
