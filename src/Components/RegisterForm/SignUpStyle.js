import React, { Component } from 'react';
import { Card } from 'antd';
import WrappedRegistrationForm from './Signup';
import './SignUpStyle.css';
import BackMainPageSignup from './BackMainPageSignup';
import FooterMain from '../../Footer';

class CardRegisterStyle extends Component {
  render() {
    const title = (
      <h2
        style={{
          fontFamily: 'Pacifico, cursive',
          fontSize: '27px',
          color: '#DD4124',
        }}
      >
        Εγγραφή στο EventPark
      </h2>
    );

    return (
      <div>
        <section id="register-page_style">
          <BackMainPageSignup />
          <div id="parent-register">
            <div className="register-card">
              <Card title={title} style={{ borderRadius: '4px' }}>
                <h5>
                  Συμπληρώστε τα παρακάτω στοιχεία για την ολοκλήρωση της
                  εγγραφής σας.
                </h5>
                <WrappedRegistrationForm />
              </Card>
            </div>
          </div>
        </section>
        <footer>
          <FooterMain />
        </footer>
      </div>
    );
  }
}

export default CardRegisterStyle;
