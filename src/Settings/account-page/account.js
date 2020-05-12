import React, { useState } from 'react';
import './account.css';
import { PageHeader, Tag, Descriptions, Card, Button, Modal } from 'antd';

import { Link, Redirect } from 'react-router-dom';

import store from '../../store/index';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { SettingOutlined } from '@ant-design/icons';
import Delete from '../modal_content/delete';
import FooterMain from '../../Footer';

import { deleteUser } from '../../store/modules/auth/actions/authActions';

const Account = () => {
  const [visible, setVisible] = useState(false);

  const currentUserState = useSelector((state) => state.Auth);
  const AuthID = currentUserState.currentUser
    ? currentUserState.currentUser.id
    : '';

  const dispatch = useDispatch();

  const deleteAccount = (id) => dispatch(deleteUser(id));

  const onDelete = (e) => {
    e.preventDefault();
    deleteAccount(AuthID);
  };

  // Redirect unauthorized user to login page
  if (!currentUserState.isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Provider store={store}>
        <PageHeader
          className="security-page-header"
          onBack={() => window.history.back()}
          title="Λογαριασμός"
          subTitle={<SettingOutlined />}
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
                title="Γενικά"
                style={{ marginTop: '15px', borderColor: '#bfbfbf' }}
              >
                <Card type="inner" title="Κατάσταση Λογαριασμού">
                  <Descriptions size="default" column={1}>
                    <Descriptions.Item label="User Legacy">
                      {currentUserState.currentUser
                        ? `${currentUserState.currentUser.username}`
                        : null}
                    </Descriptions.Item>
                    <Descriptions.Item label="E-mail">
                      {currentUserState.currentUser
                        ? `${currentUserState.currentUser.email}`
                        : null}
                    </Descriptions.Item>
                    <Descriptions.Item label="Από">
                      - / - / --
                    </Descriptions.Item>
                    <Descriptions.Item label="Κατάσταση">
                      <Tag color="green">Ενεργός/ή</Tag>
                    </Descriptions.Item>
                  </Descriptions>
                </Card>
              </Card>

              {/* Delete Account */}
              <Card
                title="Επικίνδυνο"
                style={{ borderColor: '#a8071a', marginTop: '15px' }}
              >
                <Card type="inner" title="Διαγραφή Λογαριασμού">
                  <p>
                    Είστε σίγουροι;Αφού διαγράψετε τον λογαριασμό σας, δεν θα
                    μπορείτε να αναιρέσετε την επιλογή σας!
                  </p>
                  <Button
                    type="danger"
                    size="middle"
                    block={true}
                    onClick={() => setVisible(true)}
                    isOpen
                  >
                    Διαγραφή Λογαριασμού
                  </Button>
                </Card>
              </Card>
            </div>
          </div>
        </section>
        <footer>
          <FooterMain />
        </footer>
        <Modal
          closable={false}
          visible={visible}
          title="Είστε σίγουροι;"
          footer={[
            <Button
              key="submit"
              type="dashed"
              onClick={() => setVisible(false)}
            >
              Ακύρωση
            </Button>,
            <Button key="submit" type="danger" onClick={onDelete}>
              Επιβεβαίωση
            </Button>,
          ]}
        >
          <Delete />
        </Modal>
      </Provider>
    </div>
  );
};

export default Account;
