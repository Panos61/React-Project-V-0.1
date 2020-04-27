import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import './payment-con.css';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

class PaymentConditions extends Component {
  render() {
    return (
      <div>
        <Form name="dynamic_form_item" {...formItemLayoutWithOutLabel}>
          <Form.List name="payment-conditions">
            {(fields, { add, remove }) => {
              return (
                <div>
                  {fields.map((field) => (
                    <Form.Item
                      label="Προϋπόθεση"
                      required={true}
                      key={field.key}
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={['onChange', 'onBlur']}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message: 'Εισάγετε τα παραπάνω στοιχεία',
                          },
                        ]}
                        noStyle
                      >
                        {' '}
                        <Input.Group compact>
                          <Input
                            style={{ width: 60, textAlign: 'center' }}
                            placeholder="Τιμή"
                          />
                          <Input
                            className="site-input-split"
                            style={{
                              width: 30,
                              borderLeft: 0,
                              borderRight: 0,
                              pointerEvents: 'none',
                            }}
                            placeholder="~"
                            disabled
                          />
                          <Input
                            className="site-input-right"
                            style={{
                              width: 70,
                              textAlign: 'center',
                            }}
                            placeholder="Θέση"
                          />
                        </Input.Group>
                      </Form.Item>
                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button"
                          style={{ margin: '0 8px' }}
                          onClick={() => {
                            remove(field.name);
                          }}
                        />
                      ) : null}
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => {
                        add();
                      }}
                      style={{ width: '75%' }}
                    >
                      <PlusOutlined />
                      Προϋπόθεση
                    </Button>
                  </Form.Item>
                </div>
              );
            }}
          </Form.List>
        </Form>
      </div>
    );
  }
}

export default PaymentConditions;
