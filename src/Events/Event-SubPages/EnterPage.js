import React from 'react';
import './events-style.css';

import { PageHeader, Button, Layout, BackTop } from 'antd';
import { Link } from 'react-router-dom';
import Events from '../Events';
import { HeartFilled } from '@ant-design/icons';

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
        <Events />
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
