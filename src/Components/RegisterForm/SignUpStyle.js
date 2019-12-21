import React, { Component } from 'react';
import { Card } from 'antd';
import WrappedRegistrationForm from './Signup';
import './SignUpStyle.css';
import BackMainPageSignup from './BackMainPageSignup';
import FooterMain from '../../FooterTest';

class CardRegisterStyle extends Component {
  render() {
    const title = (
      <h2
        style={{
          fontFamily: 'fantasy,verdana,san-serif',
          fontSize: '27px',
          color: '#43a047'
        }}
      >
        Εγγραφή στο EventPark
      </h2>
    );

    return (
      <div>
        <section id='register-page_style'>
          <BackMainPageSignup />
          <div id='parent-register'>
            <div className='register-card'>
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
      </div>
    );
  }
}

export default CardRegisterStyle;
