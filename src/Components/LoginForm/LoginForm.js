import React from 'react';
import { Form, Input, Button, Checkbox, Icon } from 'antd';
import { Link, Route } from 'react-router-dom';
import './LoginForm.css';
import CardRegisterStyle from '../RegisterForm/SignUpStyle';
import axios from 'axios';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = e => {
    const {
      form: { validateFields }
    } = this.props;

    e.preventDefault();
    this.props.form.validateFields(['email', 'password'], (err, values) => {
      /* if (!err) {
        console.log('Received values of form: ', values);
      } */

      axios({
        method: 'post',
        url: 'http://localhost:8000/login',
        data: values,

        config: { headers: { 'Content-Type': 'application/json' } }
      })
        .then(console.log(values))
        .catch(console.warn(err));
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className='login-form'>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Εισάγετε το Email σας!' }]
            })(
              <Input
                prefix={
                  <Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder='Email'
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Εισάγετε τον κωδικό σας!' }]
            })(
              <Input
                prefix={
                  <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type='password'
                placeholder='Κωδικός'
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: false
            })(<Checkbox>Αποθήκευση</Checkbox>)}
            <a className='login-form-forgot' href=''>
              Ξεχάσατε τον κωδικό;
            </a>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
            >
              Σύνδεση
            </Button>
            Ή <Link to='/register'>εγγραφείτε τώρα!</Link>
          </Form.Item>
        </Form>

        <Route path='/register' Component={CardRegisterStyle} />
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

export default WrappedNormalLoginForm;
