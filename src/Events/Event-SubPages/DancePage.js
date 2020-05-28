import React from 'react';
import './events-style.css';

import { PageHeader, Button, Layout, BackTop } from 'antd';
import { Link } from 'react-router-dom';
import Dance from '../Event-Category/Dance';
import { HeartFilled } from '@ant-design/icons';

const { Footer } = Layout;

const DancePage = () => {
  return (
    <div>
      <PageHeader
        className="security-page-header"
        onBack={() => window.history.back()}
        title="Χορός"
        subTitle="..χορός παντού!"
        extra={[
          <Button key="createvent" size="small" type="primary">
            <Link to="/create-event">Δημιουργήστε Event!</Link>
          </Button>,
        ]}
      />

      <section id="cinema-page">
        <Dance />
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

export default DancePage;
