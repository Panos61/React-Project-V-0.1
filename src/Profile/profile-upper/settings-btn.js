import React, { Component } from 'react';
import { Icon, Modal, Button } from 'antd';
import ProfileEdit from './profile-edit/editProfile';

class SettingsBtn extends Component {
  state = {
    size: 'large',
    visible: false,
    loading: false
  };

  showModal = () => {
    this.setState({
      visible: true
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
          <Icon type="setting" theme="filled" onClick={this.showModal} />
        </span>

        <Modal
          visible={visible}
          title="Επεξεργασία"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Επιστροφή
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={this.handleOk}
            >
              Αποθήκευση
            </Button>
          ]}
        >
          <ProfileEdit />
        </Modal>
      </div>
    );
  }
}

export default SettingsBtn;
