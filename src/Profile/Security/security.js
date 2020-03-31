import React, { Component } from 'react';
import { PageHeader, Tag, Descriptions, Card, Button, Divider } from 'antd';
import { Row, Col } from 'react-flexbox-grid';

import store from '../../store';
import { loadUser } from '../../actions/authActions';
import { Provider } from 'react-redux';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Security extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  render() {
    const { user } = this.props.auth;

    const layoutSecurity = {
      marginTop: '10vh'
    };

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

          <div id="security-layout-style" style={layoutSecurity}>
            <Row center="xs" style={{ marginTop: '25px' }}>
              <Col xs={12} lg={6}>
                {/* Email/Password update */}
                <Card title="Σύνδεση" style={{ borderColor: '#d9d9d9' }}>
                  <Card type="inner" title="Αλλαγή κωδικού πρόσβασης">
                    Αλλαγή κωδικού
                  </Card>
                  <Card
                    style={{ marginTop: 16 }}
                    type="inner"
                    title="Αλλαγή Email"
                  >
                    Αλλαγή E-mail
                  </Card>
                </Card>
              </Col>
            </Row>
            {/* Extra */}
            <Row center="xs" style={{ marginTop: '25px' }}>
              <Col xs={12} lg={6}>
                <Card
                  title="Επιπρόσθετες λειτουργίες"
                  style={{ borderColor: '#d9d9d9' }}
                >
                  <Card type="inner" title="Απόρρητο">
                    Απόρρητο
                  </Card>
                </Card>
              </Col>
            </Row>
            {/* Delete Account */}
            <Row center="xs" style={{ marginTop: '25px' }}>
              <Col xs={12} lg={6}>
                <Card
                  title="Κατάσταση Λογαριασμού"
                  style={{ borderColor: '#d9d9d9' }}
                >
                  <Card type="inner" title="Διαγραφή Λογαριασμού">
                    <Button type="danger" size="medium">
                      Διαγραφή Λογαριασμού
                    </Button>
                  </Card>
                </Card>
              </Col>
            </Row>
          </div>
        </Provider>
      </div>
    );
  }
}

const mapToStateProps = state => ({
  auth: state.auth
});

export default connect(mapToStateProps, null)(Security);
