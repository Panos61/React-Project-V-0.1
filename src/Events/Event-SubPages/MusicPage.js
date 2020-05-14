import React from 'react';
import './MusicPage.css';

import { PageHeader, Button, Layout, BackTop } from 'antd';
import { Link } from 'react-router-dom';
import Events from '../Events';
import { HeartFilled } from '@ant-design/icons';
import { Row, Col } from 'react-flexbox-grid';
import Empty from '../empty';

const { Footer } = Layout;

const MusicPage = () => {
  return (
    <div>
      <PageHeader
        className="security-page-header"
        onBack={() => window.history.back()}
        title="Μουσική"
        subTitle="..μουσική σε οποιοδήποτε σημείο!"
        extra={[
          <Button key="createvent" size="small" type="primary">
            <Link to="/create-event">Δημιουργήστε Event!</Link>
          </Button>,
        ]}
      />

      <section id="music-page">
        <Row around="xs">
          <Col xs={24}>
            <Events />
          </Col>
        </Row>
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

export default MusicPage;
