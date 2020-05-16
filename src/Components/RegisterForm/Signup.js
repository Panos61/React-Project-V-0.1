import React from 'react';
import { Form, Input, Tooltip, Row, Col, Button, Radio, Alert } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearErrors } from '../../store/modules/auth/actions/errorActions';
import { register } from '../../store/modules/auth/actions/authActions';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const UsernameTooltip = (
  <span>
    <p>
      To Username σας θα πρέπει να είναι μοναδικό. <br />
      Δεν θα είναι δυνατή η αλλαγή του στο μέλλον!
    </p>
  </span>
);

const PasswordTooltip = (
  <span>
    <ul>
      <p style={{ fontWeight: 'bold' }}>Υποχρεωτικό: </p>
      <li>Τουλάχιστον 8 χαρακτήρες</li>
      <li>Τουλάχιστον 1 ψηφίο</li>
      <p
        style={{
          marginTop: '10px',
          fontWeight: 'bold',
        }}
      >
        Ιδανικό:
      </p>
      <li>Τουλάχιστον 1 κεφαλαίο</li>
      <li>Τουλάχιστον 1 σύμβολο π.χ !@#$&*_</li>
    </ul>
  </span>
);

class WrappedRegistrationForm extends React.Component {
  // Gender State
  state = {
    value: 'male',
    message: null,
  };

  componentDidUpdate(prevProps) {
    const { Error } = this.props;
    if (Error !== prevProps.Error) {
      if (Error.status === 'REGISTER_ERROR') {
        this.setState({ message: Error.message });
      } else {
        this.setState({ message: null });
      }
    }
  }

  // Redux propTypes
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    Error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    Auth: PropTypes.object.isRequired,
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const onFinish = (values) => {
      this.props.register(values);
      console.log('Received values of form: ', values);
    };

    return (
      <Form
        {...formItemLayout}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        {this.state.message ? (
          <Alert
            style={{ marginBottom: '15px' }}
            type="error"
            message="Σφάλμα Εγγραφής"
            description="Το E-mail ή το Username που εισάγατε, χρησιμοποιούνται ήδη!" //this.state.message
            showIcon
          />
        ) : null}

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'Μη έγκυρο E-mail!',
            },
            {
              required: true,
              message: 'Εισάγετε το E-mail σας!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="username"
          label={
            <span>
              Username&nbsp;
              <Tooltip title={UsernameTooltip}>
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              min: 3,
              max: 13,
              required: true,
              message: 'Εισάγετε το Username!(3-13 χαρακτήρες)!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label={
            <span>
              Κωδικός&nbsp;
              <Tooltip title={PasswordTooltip}>
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: 'Εισάγετε τον κωδικό σας!',
              pattern: /^(?=.*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/,
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Επιβεβαίωση"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Επιβεβαιώστε τον κωδικό σας!',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject('Οι κωδικοί σας δεν ταιριάζουν!');
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label="Επιλογή Φύλου" name="gender" required>
          <Radio.Group
            onChange={this.onChange}
            defaultValue={this.state.value}
            size="large"
          >
            <Radio value="male">Άντρας</Radio>
            <Radio value="female">Γυναίκα</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Captcha" extra="Άνθρωπος ή bot;">
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item
                name="captcha"
                noStyle
                rules={[
                  {
                    required: false,
                    message: 'Εισάγετε το captcha!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Button disabled>Get captcha</Button>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          {...tailFormItemLayout}
        >
          <div style={{ marginBottom: '20px' }}>
            <span>
              Αν πατήσετε Εγγραφή, δηλώνετε ότι συμφωνείτε με τους
              <Link to="/Help"> Όρους χρήσης</Link>.
            </span>
          </div>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Εγγραφή
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
  Error: state.Error,
});

export default connect(mapStateToProps, { register, clearErrors })(
  WrappedRegistrationForm
);
