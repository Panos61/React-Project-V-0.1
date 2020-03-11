import React from 'react';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Input, Button, Checkbox, Alert } from 'antd';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import './LoginForm.css';
import CardRegisterStyle from '../RegisterForm/SignUpStyle';
import PropTypes from 'prop-types';
import App from '../../App';

import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

class LoginForm extends React.Component {
  static propTypes = {
    isAutheticated: PropTypes.bool,
    login: PropTypes.func.isRequired,
    error: PropTypes.object.isRequired
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(['email', 'password'], (err, values) => {
      this.props.login(values);
      console.warn(err);
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        {/*Alert Component */}
        <div id="alertLogin" style={{ display: 'none' }}>
          <Alert
            showIcon={false}
            message="Αδυναμία Σύνδεσης"
            description="Το e-mail ή ο κωδικός που εισάγατε είναι λάθος!"
            type="error"
          />
        </div>
        {/** */}
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Εισάγετε το Email σας!' }]
            })(
              <Input
                prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="E-mail"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Εισάγετε τον κωδικό σας!' }]
            })(
              <Input
                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Κωδικός"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: false
            })(<Checkbox>Αποθήκευση</Checkbox>)}
            <Link to="/" className="login-form-forgot">
              Ξεχάσατε τον κωδικό;
            </Link>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Σύνδεση
            </Button>
            Ή <Link to="/register">εγγραφείτε τώρα!</Link>
          </Form.Item>
        </Form>

        {/**ROUTES */}
        <BrowserRouter>
          <Route path="/" Component={App} />
          <Route path="/register" Component={CardRegisterStyle} />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAutheticated: state.auth.isAutheticated,
  error: state.error
});

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

export default connect(mapStateToProps, { login, clearErrors })(
  WrappedNormalLoginForm
);
