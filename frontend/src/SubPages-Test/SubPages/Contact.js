import React, { Component } from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import './Contact.css';

class ContactForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Row style={{ display: 'flex' }}>
          <Col span={24} offset={12}>
            <Form onSubmit={this.handleSubmit} className='email-input'>
              <Form.Item>
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: 'Εισάγετε το E-mail σας!' }]
                })(<Input prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='E-mail' />)}
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

const ContactFormPage = Form.create({ name: 'contact_form' })(ContactForm);

export default ContactFormPage;
