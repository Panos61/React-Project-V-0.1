import React, { Component } from 'react';
import { PageHeader, Tag, Descriptions } from 'antd';

import store from '../../store';
import { loadUser } from '../../actions/authActions';
import { Provider } from 'react-redux';

class Security extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
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
            <Descriptions size="default" column={3}>
              <Descriptions.Item label="Legacy Username:">-</Descriptions.Item>
              <Descriptions.Item label="E-mail:">-</Descriptions.Item>
            </Descriptions>
          </PageHeader>
        </Provider>
      </div>
    );
  }
}

export default Security;
