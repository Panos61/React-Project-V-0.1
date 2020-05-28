import React from 'react';
import { PageHeader, Card, Button, Timeline } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector, Provider } from 'react-redux';
import FooterMain from '../Footer';
import store from '../store/index';
import { HistoryOutlined } from '@ant-design/icons';

const UserHistory = () => {
  //   const currentUserState = useSelector((state) => state.Auth);
  //   const AuthID = currentUserState.currentUser
  //     ? currentUserState.currentUser.id
  //     : '';

  //   const dispatch = useDispatch();

  // Redirect user to login page in case
  // he is not authenticated and enters the URL manually
  localStorage.getItem('token');
  if (!localStorage.token) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Provider store={store}>
        <PageHeader
          className="security-page-header"
          onBack={() => window.history.back()}
          title="Ιστορικό"
          subTitle={<HistoryOutlined />}
          extra={[
            <Button key="mainpage" size="small" type="primary">
              <Link to="/">Αρχική Σελίδα</Link>
            </Button>,
          ]}
        />

        {/* CONTENT CARDS  */}

        <section id="account-layout-style">
          <div id="account-page-parent">
            <div className="account-page-card">
              {/*  Account Status */}
              <Card
                title="Ιστορικό Λογαριασμού"
                style={{ marginTop: '15px', borderColor: '#bfbfbf' }}
              >
                <Timeline>
                  <Timeline.Item>--</Timeline.Item>
                  <Timeline.Item>--</Timeline.Item>
                </Timeline>
              </Card>
            </div>
          </div>
        </section>
        <footer>
          <FooterMain />
        </footer>
      </Provider>
    </div>
  );
};

export default UserHistory;
