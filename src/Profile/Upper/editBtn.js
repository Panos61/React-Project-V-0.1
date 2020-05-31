import React, { Component } from 'react';
import { SettingFilled } from '@ant-design/icons';
import { Modal, Button } from 'antd';
import ProfileEdit from './edit';

class EditBtn extends Component {
  state = {
    size: 'large',
    visible: false,
    loading: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <span style={{ position: 'relative', top: '15px', cursor: 'pointer' }}>
          <SettingFilled onClick={this.showModal} />
        </span>

        <Modal
          closable={false}
          visible={visible}
          title="Επεξεργασία"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={this.handleCancel}
            >
              Έξοδος
            </Button>,
          ]}
        >
          <ProfileEdit />
        </Modal>
      </div>
    );
  }
}

export default EditBtn;
