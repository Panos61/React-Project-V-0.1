import React from 'react';
import { Drawer, Button } from 'antd';
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
          title="Basic Drawer"
          placement="top"
          closable={true}
          onClose={this.onClose}
          visible={visible}
          key={placement}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </>
    );
  }
}

export default MobileFilter;
