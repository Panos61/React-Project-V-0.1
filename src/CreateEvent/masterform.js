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
  InputNumber,
} from 'antd';
import './masterform.css';
import moment from 'moment';
import {
  UploadOutlined,
  InfoCircleOutlined,
  CloseOutlined,
  CheckOutlined,
  CreditCardOutlined,
  YoutubeFilled,
} from '@ant-design/icons';
import { Link, Redirect } from 'react-router-dom';
import PaymentConditions from './payment-con';

// Redux stuff import
import PropTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';

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

// time format
const format = 'HH:mm';

const { Option } = Select;
const { TextArea } = Input;
const { Meta } = Card;
const { TreeNode } = TreeSelect;
const dateFormat = 'YYYY/MM/DD';
const { RangePicker } = DatePicker;

const MasterForm = () => {
  const currentState = useSelector((state) => state);

  const dispatch = useDispatch();

  // constructor(props) {
  //   super(props);
  //   this.state = { show: true };
  //   this.state = { payment: false };
  // }

  // state = {
  //   value: 'single',
  //   checked: false,
  // };

  // onChange = (value) => {
  //   this.setState({ value });
  //   if (value === 'single') {
  //     this.setState({ show: true });
  //   } else if (value === 'festival') {
  //     this.setState({ show: false });
  //   }
  // };

  // paymentChange = (checked) => {
  //   this.setState({ checked });
  //   if (checked === false) {
  //     this.setState({ payment: false });
  //   } else if (checked === true) {
  //     this.setState({ payment: true });
  //   }
  // };

  const onFinish = (values) => {
    console.log(values);
  };

  if (!currentState.auth.isAuthenticated) {
    return <Redirect to="/login" />;
  }

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
          style={{ borderColor: '#bae637' }}
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

          {/* <Form.Item
              name="avatar"
              label="Προφίλ"
              //rules={[{ required: true, message: 'Εισάγετε προφίλ Event!' }]}
            >
              <Upload>
                <Button>
                  <UploadOutlined /> Κάνε κλικ!
                </Button>
              </Upload>
            </Form.Item> */}
        </Card>
        <Card
          title="Βήμα 2ο - Τοποθεσία"
          extra={
            <Link to="/help">
              <InfoCircleOutlined />
            </Link>
          }
          style={{
            marginTop: '5vh',
            borderColor: '#ffa940',
          }}
        >
          <Meta description="Τοποθεσία" />
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
            borderColor: '#36cfc9',
          }}
        >
          <Meta description="Ημερομηνία" />
          <Form.Item
            label="Είδος"
            name="dateType"
            rules={[
              {
                required: false,
                message: 'Επιλέξτε χρονικό είδος Event!',
              },
            ]}
          >
            <TreeSelect
              //onChange={this.onChange}
              placeholder="Είδος Event"
              allowClear
              treeDefaultExpandAll
              //defaultValue={this.state.value}
            >
              <TreeNode value="single" title="Μονό" />
              <TreeNode value="festival" title="Φεστιβάλ" />
            </TreeSelect>
          </Form.Item>
          <Form.Item
            label="Ημερομηνία"
            name="date"
            rules={[
              {
                required: false,
                message: 'Επιλέξτε χρονικό είδος Event!',
              },
            ]}
          >
            {/* {this.state.show ? (
              <DatePicker
                defaultValue={moment('2015/01/01', dateFormat)}
                format={dateFormat}
              />
            ) : (
              <RangePicker
                showTime={{ format: 'HH:mm' }}
                format="YYYY-MM-DD HH:mm"
              />
            )} */}
          </Form.Item>
          {/* {this.state.show ? (
            <Form.Item
              label="Ώρα έναρξης"
              name="singleTime"
              rules={[{ required: true, message: 'Επιλέξτε ώρα Event!' }]}
            >
              <TimePicker
                defaultValue={moment('12:00', format)}
                format={format}
              />
            </Form.Item>
          ) : null} */}
        </Card>
        <Card
          title="Βήμα 4ο - Πολυμέσα"
          extra={
            <Link to="/help">
              <InfoCircleOutlined />
            </Link>
          }
          style={{
            marginTop: '5vh',
            borderColor: '#ff4d4f',
          }}
        >
          <Meta description="Πολυμέσα" />

          <Form.Item label="Βίντεο" className="example-input">
            <Input
              size="middle"
              placeholder="link/url βίντεο"
              prefix={<YoutubeFilled />}
              rules={[
                {
                  required: false,
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="Φωτογραφίες/Εικόνες">
            <Upload>
              <Button>
                <UploadOutlined /> Upload
              </Button>
            </Upload>
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
            borderColor: '#f759ab',
          }}
        >
          <Meta description="Επιπρόσθετα" />
          <Form.Item label="Σχόλια οργανωτή" name="comments">
            <TextArea rows={2} />
          </Form.Item>
          <Form.Item
            label="Άνω των 18"
            name="ageRestricted"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          </Form.Item>
          <Form.Item
            label="Πληρωμή"
            name="payment"
            rules={[
              {
                required: false,
                message: 'Επιλέξτε τρόπο εισόδου!',
              },
            ]}
          >
            <Switch
              // onChange={this.paymentChange}
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
            {/* <Link to="/event-success">Επιβεβαίωση</Link> */}
            Επιβεβαίωση
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  event: state.event,
  error: state.error,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(MasterForm);
