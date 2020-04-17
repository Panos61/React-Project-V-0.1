import React, { Component } from 'react';
import { Steps, Button, message } from 'antd';
import { Col, Row } from 'react-flexbox-grid';
//import './form.css';
import StepOne from './forms/step1';
import StepThree from './forms/step3';

const { Step } = Steps;

class FormCE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;

    const steps = [
      {
        title: 'Βήμα 1ο',
        content: <StepOne />,
      },
      {
        title: 'Βήμα 2ο',
        content: <StepOne />,
      },
      {
        title: 'Βήμα 3ο',
        content: <StepThree />,
      },
      {
        title: 'Βήμα 4ο',
        content: <StepOne />,
      },
      {
        title: 'Βήμα 5ο',
        content: <StepThree />,
      },
    ];
    return (
      <div>
        <Steps
          current={current}
          size="small"
          type="navigation"
          style={{ marginBottom: '5vh' }}
        >
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => this.next()}
              style={{ margin: 8 }}
            >
              Επόμενο
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="danger" onClick={() => message.success('Επιτυχία')}>
              Ολοκλήρωση
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{ margin: 8 }}
              onClick={() => this.prev()}
              htmlType="submit"
            >
              Πίσω
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default FormCE;
