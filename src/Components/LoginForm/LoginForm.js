import React from 'react';
import { Form, Input, Button, Checkbox, Icon, Alert } from 'antd';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import './LoginForm.css';
import CardRegisterStyle from '../RegisterForm/SignUpStyle';
import axios from 'axios';

class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(['email', 'password'], (err, values) => {
      axios({
        method: 'post',
        url: 'http://localhost:8000/login',
        data: values,

        config: { headers: { 'Content-Type': 'application/json' } }
      })
        .then(console.log(values, err))
        .catch(function(error) {
          if (error.response.status == 401) {
            document.getElementById('alertLogin').style.display = 'block';
          }
        });
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        {/*Alert Component */}
        <div id='alertLogin' style={{ display: 'none' }}>
          <Alert
            showIcon={false}
            message='Αδυναμία Σύνδεσης'
            description='Το e-mail ή ο κωδικός που εισάγατε είναι λάθος!'
            type='error'
          />
        </div>
        {/** */}
        <Form onSubmit={this.handleSubmit} className='login-form'>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Εισάγετε το Email σας!' }]
            })(
              <Input
                prefix={
                  <Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder='E-mail'
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

        <BrowserRouter>
          <Route path='/register' Component={CardRegisterStyle} />
        </BrowserRouter>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

export default WrappedNormalLoginForm;
