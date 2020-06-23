import React, { useState } from "react";
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
} from "antd";
import "./masterform.css";
import moment from "moment";
import {
  UploadOutlined,
  InfoCircleOutlined,
  CloseOutlined,
  CheckOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import { Link, Redirect } from "react-router-dom";
import PaymentConditions from "./payment-con";

// Redux stuff import
import { connect, useSelector, useDispatch } from "react-redux";
import { createEvent } from "../store/modules/events/actions/eventAction";

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
const format = "HH:mm";

const { Option } = Select;
const { TextArea } = Input;
const { Meta } = Card;
const { TreeNode } = TreeSelect;
const dateFormat = "YYYY/MM/DD";
const { RangePicker } = DatePicker;

const MasterForm = () => {
  const currentState = useSelector((state) => state);

  const [showSingle, setShowSingle] = useState(false);
  const [showFestival, setShowFestival] = useState(false);

  // Show/Hide DatePicker-Timepicker based on Event Date Type
  const onDateClick = (value) => {
    if (value === "single") {
      setShowSingle(true);
      setShowFestival(false);
    } else if (value === "festival") {
      setShowFestival(true);
      setShowSingle(false);
    }
  };

  const dispatch = useDispatch();

  // On finish, submit the form values.
  const onFinish = (values) => {
    console.log(values);
    dispatch(createEvent(values));
  };

  // Redirect user to login page in case
  // he is not authenticated and enters the URL manually
  localStorage.getItem("token");
  if (!localStorage.token) {
    return <Redirect to="/login" />;
  }

  function onChange(dates, dateStrings) {
    console.log("From: ", dates[0], ", to: ", dates[1]);
    console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
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
          style={{ borderColor: "#bae637" }}
        >
          <Meta description="Γενικά" />
          <Form.Item
            label="Κατηγορία"
            name="category"
            rules={[{ required: true, message: "Εισάγετε κατηγορία Event!" }]}
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
                required: false,
                message: "Εισάγετε τίτλο Event!",
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
                required: false,
                message: "Εισάγετε περιγραφή Event!",
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
          title="Βήμα 2ο - Τοποθεσία"
          extra={
            <Link to="/help">
              <InfoCircleOutlined />
            </Link>
          }
          style={{
            marginTop: "5vh",
            borderColor: "#ffa940",
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
            marginTop: "5vh",
            borderColor: "#36cfc9",
          }}
        >
          <Meta description="Ημερομηνία" />
          <Form.Item
            label="Είδος"
            name="dateType"
            rules={[
              {
                required: false,
                message: "Επιλέξτε χρονικό είδος Event!",
              },
            ]}
          >
            <TreeSelect
              onChange={onDateClick}
              placeholder="Είδος Event"
              treeDefaultExpandAll
            >
              <TreeNode value="single" title="Μονό" />
              <TreeNode value="festival" title="Φεστιβάλ" />
            </TreeSelect>
          </Form.Item>

          {showFestival ? (
            <Form.Item
              label="Ημερομηνία"
              name="date"
              rules={[
                {
                  required: false,
                  message: "Επιλέξτε χρονικό είδος Event!",
                },
              ]}
            >
              {/* <RangePicker
                ranges={{
                  Today: [moment(), moment()],
                  "This Month": [
                    moment().startOf("month"),
                    moment().endOf("month"),
                  ],
                }}
                showTime
                format="DD/MM/YYYY HH:mm"
                onChange={onChange}
              /> */}
              {/* ERROR */}
              <RangePicker />
            </Form.Item>
          ) : null}

          {showSingle ? (
            <Form.Item
              label="Ημερομηνία και ώρα"
              name="singleTime"
              rules={[{ required: false, message: "Επιλέξτε ώρα Event!" }]}
            >
              <DatePicker showTime />
            </Form.Item>
          ) : null}
        </Card>
        <Card
          title="Βήμα 4ο - Πολυμέσα"
          extra={
            <Link to="/help">
              <InfoCircleOutlined />
            </Link>
          }
          style={{
            marginTop: "5vh",
            borderColor: "#ff4d4f",
          }}
        >
          <Meta description="Πολυμέσα" />

          <Form.Item label="Βίντεο" className="example-input" name="urlYoutube">
            <Input
              size="middle"
              placeholder="Youtube URL"
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
          title="Βήμα 5ο - Πληρωμή"
          extra={
            <Link to="/help">
              <InfoCircleOutlined />
            </Link>
          }
          style={{
            marginTop: "5vh",
            borderColor: "blue",
          }}
        >
          <Meta description="Στοιχεία πληρωμής" />

          <Form.Item
            label="Πληρωμή"
            // name="payment"
            rules={[
              {
                required: false,
                message: "Επιλέξτε τρόπο εισόδου!",
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
        <Card
          title="Βήμα 6ο - Επιπρόσθετα"
          extra={
            <Link to="/help">
              <InfoCircleOutlined />
            </Link>
          }
          style={{
            marginTop: "5vh",
            borderColor: "#f759ab",
          }}
        >
          <Meta description="Επιπρόσθετα" />
          <Form.Item label="Σχόλια οργανωτή" name="comments">
            <TextArea rows={2} />
          </Form.Item>
          <Form.Item
            label="Άνω των 18"
            // name="ageRestricted"
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
        </Card>
        <Form.Item {...tailLayout}>
          <Button
            htmlType="submit"
            type="primary"
            style={{ marginTop: "15px" }}
          >
            Επιβεβαίωση
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MasterForm;
