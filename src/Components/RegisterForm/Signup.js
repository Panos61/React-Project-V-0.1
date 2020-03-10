import React, { Component } from 'react';
import './Signup.css';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Input, Tooltip, Row, Col, Button, Alert, Radio } from 'antd';
import { Link, Route, Redirect } from 'react-router-dom';
import MainHelpPage from '../../SubPages-Test/MainHelpPage';
import newprofile from '../../Profile/newprofile';
import PropTypes from 'prop-types';

import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

import { connect } from 'react-redux';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

var min = 0;
var max = 1000;
var getRandom = () => Math.floor(Math.random() * (+max - +min)) + +min;

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: false //Initialize User Registration as false
    };
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired
  };

  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    email: '',
    username: '',
    password: '',
    gender: ''
  };

  componentDidMount() {
    //disable submit button at the beginning
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(
      ['email', 'username', 'password', 'gender'],
      (err, values) => {
        this.props.register(values);
      }
    );
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // handleSubmit = e => {
  //   e.preventDefault();

  //   const { email, username, password, gender } = this.state;

  //   const user = {
  //     email,
  //     username,
  //     password,
  //     gender
  //   };

  //   this.props.register(user);
  // };

  handleConfirmBlur = e => {
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

  //Select Gender
  handleSelectChange = value => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
    });
  };

  render() {
    if (this.state.isRegistered) {
      return <Redirect to={{ pathname: '/Profile' }} />;
    }

    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;

    //Only show error after a field is touched
    const emailError = isFieldTouched('email') && getFieldError('email');
    const usernameError =
      isFieldTouched('username') && getFieldError('username');
    const passwordError =
      isFieldTouched('password') && getFieldError('password');
    const confPasswordError =
      isFieldTouched('confirm') && getFieldError('confirm');
    /* const nicknameError =
      isFieldTouched('nickname') && getFieldError('nickname'); */
    const genderSelectionError =
      isFieldTouched('gender') && getFieldError('gender');

    const PasswordTooltip = (
      <span>
        <ul>
          <p style={{ fontWeight: 'bold' }}>Υποχρεωτικό: </p>
          <li>Τουλάχιστον 8 χαρακτήρες</li>
          <li>Τουλάχιστον 1 ψηφίο</li>
          <p
            style={{
              marginTop: '10px',
              fontWeight: 'bold'
            }}
          >
            Ιδανικό:
          </p>
          <li>Τουλάχιστον 1 κεφαλαίο</li>
          <li>Τουλάχιστον 1 σύμβολο π.χ !@#$&*_</li>
        </ul>
      </span>
    );

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
        <div id="parent">
          {/*Alert Components */}
          <div id="alertRegister" style={{ display: 'none' }}>
            <Alert
              showIcon={false}
              message="Σφάλμα Διακομιστή"
              description="Προέκυψε εσωτερικό σφάλμα κατά την εγγραφή.Δοκιμάστε αργότερα!"
              type="error"
            />
          </div>
          {/** */}

          <Form
            {...formItemLayout}
            onSubmit={this.handleSubmit}
            className="register-form"
            onChange={this.onChange}
          >
            <Form.Item
              name="email"
              label="E-mail"
              validateStatus={emailError ? 'error' : ''}
              help={emailError || ''}
            >
              {getFieldDecorator('email', {
                // rules: [
                //   {
                //     type: 'email',
                //     message: 'Μη έγκυρο E-mail!'
                //   },
                //   {
                //     required: true,
                //     message: 'Εισάγετε το E-mail σας!'
                //   }
                // ],
                initialValue: `panos-${getRandom()}`
              })(<Input />)}
            </Form.Item>
            <Form.Item
              name="username"
              label="Username"
              validateStatus={usernameError ? 'error' : ''}
              help={usernameError || ''}
            >
              {getFieldDecorator('username', {
                // rules: [
                //   {
                //     min: 3,
                //     max: 13,
                //     required: true,
                //     message: 'Ξεχάσατε το Username!(3-13 χαρακτήρες)',
                //     whitespace: true
                //   }
                // ],
                initialValue: `panos-${getRandom()}`
              })(<Input />)}
            </Form.Item>
            <Form.Item
              onChange={this.onChange}
              name="password"
              label={
                <span>
                  Κωδικός&nbsp;
                  <Tooltip title={PasswordTooltip}>
                    <QuestionCircleOutlined />
                  </Tooltip>
                </span>
              }
              hasFeedback
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}
            >
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Εισάγετε τον κωδικό σας!',
                    pattern: /^(?=.*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/
                  },
                  {
                    validator: this.validateToNextPassword
                  }
                ],
                initialValue: 'florina12'
              })(<Input.Password />)}
            </Form.Item>

            <Form.Item
              label="Επιβεβαίωση"
              hasFeedback
              validateStatus={confPasswordError ? 'error' : ''}
              help={confPasswordError || ''}
            >
              {getFieldDecorator('confirm', {
                rules: [
                  {
                    required: true,
                    message: 'Επιβεβαιώστε τον κωδικό σας!'
                  },
                  {
                    validator: this.compareToFirstPassword
                  }
                ],
                initialValue: 'florina12'
              })(<Input.Password onBlur={this.handleConfirmBlur} />)}
            </Form.Item>
            <Form.Item
              onChange={this.onChange}
              name="gender"
              label="Επιλογή Φύλου"
              validateStatus={genderSelectionError ? 'error' : ''}
              help={genderSelectionError || ''}
            >
              {getFieldDecorator('gender', {
                rules: [{ required: true, message: 'Επιλέξτε το φύλο σας!' }],
                initialValue: 'male'
              })(
                <Radio.Group>
                  <Radio value="male">Άντρας</Radio>
                  <Radio value="female">Γυναίκα</Radio>
                </Radio.Group>
              )}
            </Form.Item>
            {/*  <Form.Item
              label={
                <span>
                  Nickname&nbsp;
                  <Tooltip title='Εισάγετε ένα nickname.Μπορείτε να το αλλάξετε στο μέλλον!'>
                    <Icon type='question-circle-o' />
                  </Tooltip>
                </span>
              }
              validateStatus={nicknameError ? 'error' : ''}
              help={nicknameError || ''}
            >
              {getFieldDecorator('nickname', {
                rules: [
                  {
                    min: 3,
                    max: 13,
                    required: true,
                    message: 'Ξεχάσατε το Nickname!(3-13 χαρακτήρες)',
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </Form.Item> */}

            <Form.Item label="Captcha" extra="Άνθρωπος ή bot;">
              <Row gutter={8}>
                <Col span={12}>
                  {getFieldDecorator('captcha', {
                    rules: [
                      {
                        required: false,
                        message: 'Εισάγετε το Captcha!'
                      }
                    ]
                  })(<Input />)}
                </Col>
                <Col span={12}>
                  <Button disabled>Get captcha</Button>
                </Col>
              </Row>
            </Form.Item>

            <div style={{ marginBottom: '20px' }}>
              <span>
                Αν πατήσετε Εγγραφή, δηλώνετε ότι συμφωνείτε με τους
                <Link to="/Help"> Όρους χρήσης</Link>.
              </span>
            </div>
            <Form.Item {...tailFormItemLayout}>
              <Button
                type="primary"
                htmlType="submit"
                disabled={hasErrors(getFieldsError())}
              >
                Εγγραφή
              </Button>
            </Form.Item>
          </Form>
        </div>
        <Route to="/Profile" Componen={newprofile} />
        <Route to="/Help" Component={MainHelpPage} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

const WrappedRegistrationForm = Form.create({ name: 'register' })(
  RegistrationForm
);

//export default WrappedRegistrationForm;
export default connect(mapStateToProps, { register, clearErrors })(
  WrappedRegistrationForm
);
