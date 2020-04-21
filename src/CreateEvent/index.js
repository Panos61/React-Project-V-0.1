import React, { Component } from 'react';
import { PageHeader, Button, BackTop, Card } from 'antd';
import './index-event.css';
import MasterForm from './masterform';
import FooterMain from '../FooterTest';
import { ClockCircleOutlined } from '@ant-design/icons';

const { Meta } = Card;

class CreateEvent extends Component {
  render() {
    const description = (
      <p>
        Υπολογιζόμενος χρόνος ολοκλήρωσης: 6 λεπτά {''}
        <span>
          <ClockCircleOutlined />
        </span>
      </p>
    );
    return (
      <div>
        <PageHeader
          className="create-event-header"
          onBack={() => window.history.back()}
          title="Δημιουργία Event"
          subTitle="EventPark"
          extra={[
            <Button shape="round" size="small" key="help" type="default">
              Βοήθεια
            </Button>,
          ]}
        />
        <section id="create-event-page">
          <div id="create-event-parent">
            <div className="create-event-card">
              <Card title="Δημιουργήστε το δικό σας Event!" size="default">
                <Meta
                  description={description}
                  style={{ marginBottom: '15px' }}
                />

                <MasterForm />
              </Card>

              <BackTop />
            </div>
          </div>
        </section>
        <footer>
          <FooterMain />
        </footer>
      </div>
    );
  }
}

export default CreateEvent;
