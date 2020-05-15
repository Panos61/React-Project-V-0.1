import React from 'react';
import './resetPass.css';
import FooterMain from '../../Footer';
import { Form, Card, Input, Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import BackMainPage from '../RegisterForm/BackMainPageSignup';

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

const resetPasswordPage = () => {
  return (
    <div>
      <section id="reset-password-page">
        <BackMainPage />
        <div id="reset-parent">
          <div className="reset-card">
            <Card title="Επαναφορά κωδικού" style={{ borderRadius: '1px' }}>
              <Form {...layout}>
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
                <Form.Item {...tailLayout}>
                  <Button type="primary">Επαναφορά</Button>
                </Form.Item>
              </Form>
            </Card>
          </div>
        </div>
      </section>
      <footer>
        <FooterMain />
      </footer>
    </div>
  );
};

export default resetPasswordPage;
