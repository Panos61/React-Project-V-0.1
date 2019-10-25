import React, { Component } from 'react';
import { Card } from 'antd';
import WrappedRegistrationForm from './Signup';
import './SignUpStyle.css';

class CardRegisterStyle extends React.Component {
  render() {
    const title = (
      <h2 style={{ fontFamily: 'fantasy,verdana,san-serif', fontSize: '27px', color: '#43a047' }}>
        Εγγραφή στο EventPark
      </h2>
    );

    return (
      <div>
        <div id='parent'>
          <div className='register-card'>
            <Card title={title} style={{ width: 400, borderRadius: '8px' }}>
              <h4 style={{ fontFamily: 'san-serif' }}>
                Συμπληρώστε τα παρακάτω στοιχεία για την ολοκρήρωση της εγγραφής σας.
              </h4>
              <WrappedRegistrationForm />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default CardRegisterStyle;
