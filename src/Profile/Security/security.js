import React, { Component } from 'react';
import './security.css';
import {
  PageHeader,
  Tag,
  Descriptions,
  Card,
  Button,
  Divider,
  Layout,
  Modal,
  Input,
} from 'antd';

import { HeartFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import store from '../../store';
import { Provider } from 'react-redux';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Delete from './modal_content/delete';

const { Footer } = Layout;

class Security extends Component {
  state = {
    visible: false,
  };

  // Delete User Modal
  showDeleteModal = () => {
    this.setState({
      visible: true,
    });
  };

  // **
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  static propTypes = {
    Auth: PropTypes.object.isRequired,
  };

  render() {
    const { user } = this.props.Auth;

    const layoutSecurity = {
      marginTop: '5vh',
    };

    const { visible } = this.state;

    return (
      <div>
        <Provider store={store}>
          <PageHeader
            className="security-page-header"
            onBack={() => window.history.back()}
            title="Ασφάλεια και Σύνδεση"
            subTitle="Κατάσταση:"
            tags={<Tag color="green">Ενεργός/ή</Tag>}
          >
            <Descriptions size="default" column={2}>
              <Descriptions.Item label="User Legacy">
                {user ? `${user.username}` : null}
              </Descriptions.Item>
              <Descriptions.Item label="E-mail">
                {user ? `${user.email}` : null}
              </Descriptions.Item>
              <Descriptions.Item label="Από">- / - / --</Descriptions.Item>
            </Descriptions>
          </PageHeader>

          <Divider dashed />
          {/* CONTENT CARDS  */}

          <section id="security-layout-style" style={layoutSecurity}>
            <div id="securty-page-parent">
              <div className="security-page-card">
                {/* Email/Password update */}
                <Card title="Σύνδεση" style={{ borderColor: '#d9d9d9' }}>
                  <Card type="inner" title="Αλλαγή κωδικού πρόσβασης">
                    <Input.Password placeholder="Παλιός κωδικός" required />
                    <Input.Password
                      placeholder="Καινούργιος κωδικός"
                      style={{ marginTop: '12px' }}
                      required
                    />
                    <Input.Password
                      placeholder="Επιβεβαίωση "
                      style={{ marginTop: '12px' }}
                      required
                    />
                  </Card>
                  <Card
                    style={{ marginTop: 16 }}
                    type="inner"
                    title="Αλλαγή Email"
                  >
                    <Input type="email" placeholder="Email" required />
                    <Input.Password
                      placeholder="Τρέχων κωδικός"
                      required
                      style={{ marginTop: '12px' }}
                    />
                  </Card>
                </Card>

                {/* Extra */}

                <Card
                  title="Επιπρόσθετες λειτουργίες"
                  style={{ borderColor: '#d9d9d9', marginTop: '15px' }}
                >
                  <Card type="inner" title="Απόρρητο">
                    Απόρρητο
                  </Card>
                </Card>

                {/* Delete Account */}

                <Card
                  title="Κατάσταση Λογαριασμού"
                  style={{ borderColor: '#a8071a', marginTop: '15px' }}
                >
                  <Card type="inner" title="Διαγραφή Λογαριασμού">
                    <p>
                      Είστε σίγουροι;Αφού διαγράψετε τον λογαριασμό σας, δεν θα
                      μπορείτε να αναιρέσετε την επιλογή σας!
                    </p>
                    <Button
                      type="danger"
                      size="medium"
                      block={true}
                      onClick={this.showDeleteModal}
                    >
                      Διαγραφή Λογαριασμού
                    </Button>
                  </Card>
                </Card>
              </div>
            </div>
          </section>
          <footer>
            <Footer
              style={{
                textAlign: 'center',
                backgroundColor: 'unset',
              }}
            >
              EventPark ©2019 Created with <HeartFilled /> by us!
            </Footer>
          </footer>
          <Modal
            closable={false}
            visible={visible}
            title="Είστε σίγουροι;"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="submit" type="dashed" onClick={this.handleCancel}>
                Ακύρωση
              </Button>,
              <Button key="submit" type="danger" onClick={this.handleOk}>
                <Link to="/delete-user"> Επιβεβαίωση </Link>
              </Button>,
            ]}
          >
            <Delete />
          </Modal>
        </Provider>
      </div>
    );
  }
}

const mapToStateProps = (state) => ({
  Auth: state.Auth,
});

export default connect(mapToStateProps, null)(Security);
