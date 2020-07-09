import React from 'react';
import { Drawer, Button, Checkbox, Row, Col, Divider } from 'antd';
import styled from 'styled-components';
import { FilterFilled } from '@ant-design/icons';

const Wrapper = styled.div`
  position: fixed;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 30;
  cursor: pointer;
`;

class MobileFilter extends React.Component {
  state = { visible: false, placement: 'left' };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = (e) => {
    this.setState({
      placement: e.target.value,
    });
  };

  render() {
    const { placement, visible } = this.state;
    return (
      <>
        <Wrapper>
          <Button
            type="default"
            shape="round"
            size="large"
            onClick={this.showDrawer}
            icon={<FilterFilled />}
          >
            Φίλτρο
          </Button>
        </Wrapper>
        <Drawer
          title="Περισσότερα Φίλτρα"
          placement="top"
          closable={true}
          onClose={this.onClose}
          visible={visible}
          key={placement}
        >
          <Checkbox.Group style={{ width: '100%' }}>
            <Row>
              <Col lg={8} xs={8}>
                <Checkbox value="A">Για ανήλικους</Checkbox>
              </Col>
              <Col lg={8} xs={8}>
                <Checkbox value="B" style={{ color: 'orange' }}>
                  Φεστιβάλ
                </Checkbox>
              </Col>
              <Col lg={8} xs={8}>
                <Checkbox value="C" style={{ color: 'green' }}>
                  Μιάς ημέρας
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
          <Divider plain>Τιμές Εισόδου</Divider>
          {/* Payment Filter */}

          <Checkbox.Group style={{ width: '100%' }}>
            <Row>
              <Col lg={8} xs={8}>
                <Checkbox value="A" style={{ color: 'red' }}>
                  Δωρεάν
                </Checkbox>
              </Col>
              <Col lg={8} xs={8}>
                <Checkbox value="B">1‎ - 15€</Checkbox>
              </Col>
              <Col lg={8} xs={8}>
                <Checkbox value="C">16-40‎€</Checkbox>
              </Col>
            </Row>
            <Row>
              <Col lg={8} xs={8}>
                <Checkbox value="D">41-75‎€</Checkbox>
              </Col>
              <Col lg={8} xs={8}>
                <Checkbox value="E">76 - 110‎€</Checkbox>
              </Col>
              <Col lg={8} xs={8}>
                <Checkbox value="F">{'>'}111‎€</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Drawer>
      </>
    );
  }
}

export default MobileFilter;
