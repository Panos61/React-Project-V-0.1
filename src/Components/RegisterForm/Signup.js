import React from 'react';
import './Signup.css';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Row,
  Col,
  Button,
  Alert,
  Select,
  Radio
} from 'antd';
import axios from 'axios';
import { Link, Route, Redirect } from 'react-router-dom';
import MainHelpPage from '../../SubPages-Test/MainHelpPage';
import newprofile from '../../Profile/newprofile';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: false //Initialize User Registration as false
    };
  }

  state = {
    confirmDirty: false,
    autoCompleteResult: []
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
        axios({
          method: 'post',
          url: 'http://localhost:8000/register',
          data: values,

          config: {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          }
        })
          .then(console.log(values, err))
          .then(res => {
            if (res.status === 200) {
              this.setState({ isRegistered: true });
            }
          })
          .catch(function(error) {
            if (
              error.response.status === 400 ||
              error.response.status === 500
            ) {
              document.getElementById('alertRegister').style.display = 'block';
            }
          });
      }
    );
  };

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

    const { Option } = Select;

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
          >
            <Form.Item
              label="E-mail"
              validateStatus={emailError ? 'error' : ''}
              help={emailError || ''}
            >
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
            <Form.Item
              label="Username"
              validateStatus={usernameError ? 'error' : ''}
              help={usernameError || ''}
            >
              {getFieldDecorator('username', {
                rules: [
                  {
                    min: 3,
                    max: 13,
                    required: true,
                    message: 'Ξεχάσατε το Username!(3-13 χαρακτήρες)',
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item
              label={
                <span>
                  Κωδικός&nbsp;
                  <Tooltip title={PasswordTooltip}>
                    <Icon type="question-circle-o" />
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
                ]
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
                ]
              })(<Input.Password onBlur={this.handleConfirmBlur} />)}
            </Form.Item>

            {/* <Form.Item
              label="Φύλο"
              // validateStatus={genderSelectionError ? 'error' : ''}
              // help={genderSelectionError || ''}
            >
              {getFieldDecorator('gender', {
                rules: [{ required: true, message: 'Επιλέξτε το φύλο σας!' }]
              })}
              <Select
                placeholder="Επιλογή φύλου"
                onChange={this.handleSelectChange}
              >
                <Option value="male">Άντρας</Option>
                <Option value="female">Γυναίκα</Option>
              </Select>
            </Form.Item> */}

            <Form.Item
              label="Επιλογή Φύλου"
              validateStatus={genderSelectionError ? 'error' : ''}
              help={genderSelectionError || ''}
            >
              {getFieldDecorator('gender', {
                rules: [{ required: true, message: 'Επιλέξτε το φύλο σας!' }]
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

            {/* Checkbox  */}

            {/* <Form.Item
              {...tailFormItemLayout}
              validateStatus={isNotChecked ? 'error' : ''}
              help={isNotChecked || ''}
            >
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
                  Έχω διαβάσει τους <Link to='/Help'>όρους</Link>
                </Checkbox>
              )}
            </Form.Item> */}
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

const WrappedRegistrationForm = Form.create({ name: 'register' })(
  RegistrationForm
);

export default WrappedRegistrationForm;
