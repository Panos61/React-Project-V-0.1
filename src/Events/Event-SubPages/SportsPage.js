import React from 'react';
import './events-style.css';

import { PageHeader, Button, Layout, BackTop } from 'antd';
import { Link } from 'react-router-dom';
import { HeartFilled } from '@ant-design/icons';
import Sports from '../Event-Category/Sports';

const { Footer } = Layout;

const SportsPage = () => {
  return (
    <div>
      <PageHeader
        className="security-page-header"
        onBack={() => window.history.back()}
        title="Αθλητισμός"
        subTitle="..αθλητισμός σε οποιοδήποτε σημείο!"
        extra={[
          <Button key="createvent" size="small" type="primary">
            <Link to="/create-event">Δημιουργήστε Event!</Link>
          </Button>,
        ]}
      />

      <section id="sports-page">
        <Sports />
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

export default SportsPage;
