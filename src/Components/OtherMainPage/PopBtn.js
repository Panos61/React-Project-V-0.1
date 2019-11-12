import React from 'react';
import { Button, Col, Row } from 'antd';

class PopBtn extends React.Component {
  state = {
    size: 'medium'
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Row align={'middle'} type={'flex'} justify={'center'}>
          <Col>
            <Button
              type='primary'
              icon='rise'
              size={size}
              style={{ top: '100px', zIndex: '1', alignContent: 'center' }}
            >
              Δημοφιλές
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default PopBtn;
