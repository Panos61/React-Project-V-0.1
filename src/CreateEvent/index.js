import React, { Component } from 'react';
import { PageHeader, Button, BackTop, Card, Affix, Progress } from 'antd';
import './index-event.css';
import MasterForm from './masterform';
import FooterMain from '../Footer';
import { ClockCircleOutlined } from '@ant-design/icons';

const { Meta } = Card;

class CreateEvent extends Component {
  render() {
    const description = (
      <p>
        Υπολογιζόμενος χρόνος ολοκλήρωσης: 8 λεπτά {''}
        <span>
          <ClockCircleOutlined />
        </span>
        <br />
        <p>
          <span style={{ color: 'orange' }}>*</span> Υποχρεωτικό πεδίο
        </p>
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
        {/* <Affix>
          <Progress
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068',
            }}
            percent={99.9}
          />
        </Affix> */}
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
