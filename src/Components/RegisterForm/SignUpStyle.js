import React, { Component } from 'react';
import { Card } from 'antd';
import WrappedRegistrationForm from './Signup';
import './SignUpStyle.css';
import BackMainPageSignup from './BackMainPageSignup';
import FooterMain from '../../FooterTest';

import { Provider } from 'react-redux';
import store from '../../store';
import { loadUser } from '../../actions/authActions';

class CardRegisterStyle extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    const title = (
      <h2
        style={{
          fontFamily: 'fantasy,verdana,san-serif',
          fontSize: '27px',
          color: '#DD4124'
        }}
      >
        Εγγραφή στο EventPark
      </h2>
    );

    return (
      <div>
        <Provider store={store}>
          <section id="register-page_style">
            <BackMainPageSignup />
            <div id="parent-register">
              <div className="register-card">
                <Card title={title} style={{ borderRadius: '4px' }}>
                  <h4 style={{ fontFamily: 'san-serif' }}>
                    Συμπληρώστε τα παρακάτω στοιχεία για την ολοκλήρωση της
                    εγγραφής σας.
                  </h4>
                  <WrappedRegistrationForm />
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
  }
}

export default CardRegisterStyle;
