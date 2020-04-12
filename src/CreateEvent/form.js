import React, { Component } from 'react';
import { Steps, Button, message } from 'antd';
import { Col, Row } from 'react-flexbox-grid';
import './form.css';

const { Step } = Steps;

const steps = [
  {
    title: 'Γενικά',
    content: 'First-Content',
  },
  {
    title: 'Περιεχόμενο',
    content: 'Second-content',
  },
  {
    title: 'Ημερομηνία',
    content: 'Last-content',
  },
  {
    title: 'Πολυμέσα',
    content: 'digital content',
  },
];

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

    return (
      <div>
        <Row style={{ marginTop: '20vh' }}>
          <Col xs={12}>
            <Row center="xs">
              <Col xs={6}>
                <Steps current={current}>
                  {steps.map((item) => (
                    <Step key={item.title} title={item.title} />
                  ))}
                </Steps>

                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                  {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => this.next()}>
                      Next
                    </Button>
                  )}
                  {current === steps.length - 1 && (
                    <Button
                      type="primary"
                      onClick={() => message.success('Processing complete!')}
                    >
                      Done
                    </Button>
                  )}
                  {current > 0 && (
                    <Button
                      style={{ marginLeft: 8 }}
                      onClick={() => this.prev()}
                    >
                      Previous
                    </Button>
                  )}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default FormCE;
