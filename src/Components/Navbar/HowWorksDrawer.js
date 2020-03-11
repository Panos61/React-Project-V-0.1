import React from 'react';
import { Drawer, Card, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

class HowWorks extends React.Component {
  state = { visible: false, placement: 'bottom' };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value
    });
  };

  render() {
    return (
      <div>
        <a
          onClick={this.showDrawer}
          style={{
            display: 'inline-block',
            textDecoration: 'underline',
            color: 'yellowgreen'
          }}
        >
          Πώς λειτουργεί
        </a>

        <Drawer
          title="Πώς λειτουργεί το App"
          placement={this.state.placement}
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Row gutter={16}>
            <Col span={8}>
              <Card title="1" bordered={false}>
                Content1
              </Card>
            </Col>
            <Col span={8}>
              <Card title="2" bordered={false}>
                Content1
              </Card>
            </Col>
            <Col span={8}>
              <Card title="3" bordered={false}>
                Content1
              </Card>
            </Col>
          </Row>
          <Row type="flex" justify="end">
            <Col lg={3} xs={12}>
              <Link to="/" style={{ textDecoration: 'underline' }}>
                Μάθετε περισσότερα
              </Link>
            </Col>
          </Row>
        </Drawer>
      </div>
    );
  }
}

export default HowWorks;
