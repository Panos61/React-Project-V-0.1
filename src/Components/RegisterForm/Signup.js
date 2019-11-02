import React from 'react';
import './Signup.css';
import { Form, Input, Tooltip, Icon, Row, Col, Checkbox, Button } from 'antd';

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleConfirmBlur = (e) => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Οι κωδικοί δεν ταιριάζουν!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <div>
        <div id='parent'>
          <Form {...formItemLayout} onSubmit={this.handleSubmit} className='register-form'>
            <Form.Item label='E-mail'>
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'Μη έγκυρο E-mail!'
                  },
                  {
                    required: true,
                    message: 'Εισάγετε το E-mail σας!'
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label='Username'>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Ξεχάσατε το Username!', whitespace: true }]
              })(<Input />)}
            </Form.Item>
            <Form.Item label='Κωδικός' hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Εισάγετε τον κωδικό σας!'
                  },
                  {
                    validator: this.validateToNextPassword
                  }
                ]
              })(<Input.Password />)}
            </Form.Item>

            <Form.Item label='Επιβεβαίωση' hasFeedback>
              {getFieldDecorator('confirm', {
                rules: [
                  {
                    required: true,
                    message: 'Επιβεβαιώστε τον κωδικό σας!'
                  },
                  {
                    validator: this.compareToFirstPassword
                  }
                ]
              })(<Input.Password onBlur={this.handleConfirmBlur} />)}
            </Form.Item>

            <Form.Item
              label={
                <span>
                  Nickname&nbsp;
                  <Tooltip title='Εισάγετε ένα nickname.Μπορείτε να το αλλάξετε στο μέλλον!'>
                    <Icon type='question-circle-o' />
                  </Tooltip>
                </span>
              }
            >
              {getFieldDecorator('nickname', {
                rules: [{ required: true, message: 'Ξεχάσατε το Nickname!', whitespace: true }]
              })(<Input />)}
            </Form.Item>

            <Form.Item label='Captcha' extra='Άνθρωπος ή bot;'>
              <Row gutter={8}>
                <Col span={12}>
                  {getFieldDecorator('captcha', {
                    rules: [{ required: true, message: 'Εισάγετε το Captcha!' }]
                  })(<Input />)}
                </Col>
                <Col span={12}>
                  <Button>Get captcha</Button>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              {getFieldDecorator('agreement', {
                valuePropName: 'checked',
                rules: [
                  {
                    required: true,
                    message: 'Αποδεχτείτε τους Όρους!'
                  }
                ]
              })(
                <Checkbox>
                  Έχω διαβάσει τους <a href=''>Όρους!</a>
                </Checkbox>
              )}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type='primary' htmlType='submit'>
                Εγγραφή
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

export default WrappedRegistrationForm;
