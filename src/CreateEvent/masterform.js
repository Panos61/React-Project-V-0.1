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
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

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

// Ticket store link input
// const selectAfter = (
//   <Select defaultValue=".gr" className="select-after">
//     <Option value=".gr">.gr</Option>
//     <Option value=".com">.com</Option>
//   </Select>
// );

const onFinish = (values) => {
  console.log(values);
};

class MasterForm extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
    this.state = { payment: false };
  }

  state = {
    value: 'single',
    checked: false,
  };

  onChange = (value) => {
    this.setState({ value });
    if (value === 'single') {
      this.setState({ show: true });
    } else if (value === 'festival') {
      this.setState({ show: false });
    }
  };

  paymentChange = (checked) => {
    this.setState({ checked });
    if (checked === false) {
      this.setState({ payment: false });
    } else if (checked === true) {
      this.setState({ payment: true });
    }
  };

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
                onChange={this.onChange}
                placeholder="Είδος Event"
                allowClear
                treeDefaultExpandAll
                defaultValue={this.state.value}
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
                  required: true,
                  message: 'Επιλέξτε χρονικό είδος Event!',
                },
              ]}
            >
              {this.state.show ? (
                <DatePicker
                  defaultValue={moment('2015/01/01', dateFormat)}
                  format={dateFormat}
                />
              ) : (
                <RangePicker
                  showTime={{ format: 'HH:mm' }}
                  format="YYYY-MM-DD HH:mm"
                />
              )}
            </Form.Item>
            {this.state.show ? (
              <Form.Item
                label="Ώρα έναρξης"
                name="single-time"
                rules={[{ required: true, message: 'Επιλέξτε ώρα Event!' }]}
              >
                <TimePicker
                  defaultValue={moment('12:00', format)}
                  format={format}
                />
              </Form.Item>
            ) : null}
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
            <Form.Item
              label="Πληρωμή"
              name="payment"
              rules={[
                {
                  required: true,
                  message: 'Επιλέξτε τρόπο εισόδου!',
                },
              ]}
            >
              <Switch
                onChange={this.paymentChange}
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
              />
            </Form.Item>
            {this.state.payment ? (
              <Form.Item
                label="Στοιχεία πληρωμής"
                name="payment-info"
                rules={[
                  {
                    required: true,
                    message: 'Συμπληρώστε τα στοιχεία πληρωμής του Event!',
                  },
                ]}
              >
                <div className="event-payment-box">
                  <div style={{ position: 'absolute', top: '9%', left: '9%' }}>
                    <CreditCardOutlined />
                  </div>
                  <Form.Item
                    label="Ποσό"
                    name="price"
                    rules={[
                      {
                        required: true,
                        message: 'Εισάγετε ποσό πληρωμής!',
                      },
                    ]}
                  >
                    <InputNumber />
                  </Form.Item>
                  <Form.Item
                    label="URL αγοράς εισητηρίων"
                    name="tickets"
                    rules={[
                      {
                        required: false,
                      },
                    ]}
                  >
                    <div style={{ marginBottom: 16 }}>
                      <Input
                        addonBefore="http://"
                        //addonAfter={selectAfter}
                        placeholder="Εισάγετε link"
                      />
                    </div>
                  </Form.Item>
                </div>
              </Form.Item>
            ) : null}
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
  }
}

export default MasterForm;
