import React from 'react';
import './events-style.css';
import { PageHeader, Button, Layout, BackTop } from 'antd';
import { Link } from 'react-router-dom';
import { HeartFilled } from '@ant-design/icons';
import Arts from '../Event-Category/Arts';

const { Footer } = Layout;

const ArtPage = () => {
  return (
    <div>
      <PageHeader
        className="security-page-header"
        onBack={() => window.history.back()}
        title="Τέχνες"
        subTitle="..τέχνη παντού!"
        extra={[
          <Button key="createvent" size="small" type="primary">
            <Link to="/create-event">Δημιουργήστε Event!</Link>
          </Button>,
        ]}
      />

      <section id="arts-page">
        <Arts />
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

export default ArtPage;
