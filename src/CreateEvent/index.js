import React, { Component } from 'react';
import { PageHeader, Button } from 'antd';
import './index.css';
import FormCE from './form';

class CreateEvent extends Component {
  render() {
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
        <FormCE />
      </div>
    );
  }
}

export default CreateEvent;
