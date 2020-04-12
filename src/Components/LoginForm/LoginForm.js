import React, { Component } from 'react';
import { compose } from 'redux';
import { Form, Input, Button, Checkbox, Alert } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import PropTypes from 'prop-types';

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

class WrappedNormalLoginForm extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    login: PropTypes.func.isRequired,
    error: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };

  state = {
    message: null,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // Check for login error
      if (error.status === 'LOGIN_FAIL') {
        this.setState({ message: error.message });
      } else {
        this.setState({ message: null });
      }
    }
  }

  render() {
    const onFinish = (values) => {
      this.props.login(values);
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
      console.warn('Failed:', errorInfo);
    };

    return (
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        {this.state.message ? (
          <Alert
            style={{ marginBottom: '5px' }}
            type="error"
            message="Σφάλμα Σύνδεσης"
            description={this.state.message}
            showIcon
          />
        ) : null}
        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              required: true,
              message: 'Εισάγετε το E-mail σας!',
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            type="email"
            placeholder="E-mail"
          />
        </Form.Item>
        <Form.Item
          label="Κωδικός"
          name="password"
          rules={[
            {
              required: true,
              message: 'Εισάγετε τον κωδικό σας!',
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Κωδικός"
          />
        </Form.Item>
        <Form.Item {...tailLayout} valuePropName="checked">
          <Checkbox>Αποθήκευση</Checkbox>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Σύνδεση
          </Button>
        </Form.Item>
        <Form.Item style={{ marginLeft: '15px' }}>
          Ή <Link to="/register">εγγραφείτε τώρα!</Link>
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  auth: state.auth,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { login, clearErrors })
)(WrappedNormalLoginForm);
