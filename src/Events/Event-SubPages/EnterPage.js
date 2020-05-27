import React from 'react';
import './events-style.css';
import { PageHeader, Button, Layout, BackTop } from 'antd';
import { Link } from 'react-router-dom';
import { HeartFilled } from '@ant-design/icons';
import Enter from '../Event-Category/Enter';

const { Footer } = Layout;

const EnterPage = () => {
  return (
    <div>
      <PageHeader
        className="security-page-header"
        onBack={() => window.history.back()}
        title="Διασκέδαση"
        subTitle="..διασκέδαση σε οποιοδήποτε σημείο!"
        extra={[
          <Button key="createvent" size="small" type="primary">
            <Link to="/create-event">Δημιουργήστε Event!</Link>
          </Button>,
        ]}
      />

      <section id="enter-page">
        <Enter />
        <BackTop />
      </section>

      <footer>
        <Footer
          style={{
            textAlign: 'center',
            backgroundColor: 'unset',
          }}
        >
          EventPark ©2020 Created with <HeartFilled /> by us!
        </Footer>
      </footer>
    </div>
  );
};

export default EnterPage;
