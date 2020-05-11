import React from 'react';
import './settings.css';
import {
  HistoryOutlined,
  SettingOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';
import Footer from '../Footer';
import { Row, Col, PageHeader, Divider, Card, Button } from 'antd';

import { Link } from 'react-router-dom';
import FooterMain from '../Footer';

const IconTextStyle = {
  display: 'block',
  marginTop: '12px',
  padding: '5px',
};

const subTextStyle = {
  fontSize: '13px',
  color: 'grey',
};

const SettingsMainPage = () => {
  return (
    <div>
      <div>
        <PageHeader
          className="security-page-header"
          onBack={() => window.history.back()}
          title="Ασφάλεια και Σύνδεση"
          subTitle="Ρυθμίστε τον λογαριασμό σας"
          extra={[
            <Button key="mainpage" size="small" type="primary">
              <Link to="/">Αρχική Σελίδα</Link>
            </Button>,
          ]}
        />
      </div>
      <section id="settings-page">
        <div className="settings-content">
          {' '}
          {/* MAIN CONTENT */}
          <Row
            type="flex"
            justify="end"
            gutter={[8, 16]}
            style={{ marginTop: '5vh' }}
          >
            <Col lg={24} xs={24}>
              <Card className="security-page-card">
                <SettingOutlined style={{ fontSize: '7vh', color: '#08c' }} />
                <Link to="/account" style={IconTextStyle} id="linksHelp_Page">
                  Λογαριασμός <br />
                  <p style={subTextStyle}>
                    Γενικές πληροφορίες σχετικά με την κατάσταση του λογαριασμού
                    σας.
                  </p>
                </Link>
              </Card>
            </Col>

            <Col lg={24} xs={24}>
              <Card className="security-page-card">
                <SafetyCertificateOutlined
                  style={{ fontSize: '7vh', color: '#08c' }}
                />
                <Link to="/security" style={IconTextStyle} id="linksHelp_Page">
                  Ασφάλεια <br />
                  <p style={subTextStyle}>Αλλαγή Κωδικού.</p>
                </Link>
              </Card>
            </Col>
            <Col lg={24} xs={24}>
              <Card className="security-page-card">
                <HistoryOutlined style={{ fontSize: '7vh', color: '#08c' }} />
                <Link to="/" style={IconTextStyle} id="linksHelp_Page">
                  Ιστορικό <br />{' '}
                  <p style={subTextStyle}>
                    Όλες οι πρόσφατες ρυθμίσεις στον λογαριασμό σας.
                  </p>
                </Link>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      <footer>
        <FooterMain />
      </footer>
    </div>
  );
};

export default SettingsMainPage;
