import React, { Component } from 'react';
import { Card, Icon, Col, Row, Layout } from 'antd';
import WrappedNormalLoginForm from './LoginForm';
import './LoginFormStyle.css';

const Footer = Layout;

class CardLoginStyle extends Component {
  render() {
    const title = (
      <h2
        style={{
          fontFamily: 'fantasy,verdana,san-serif',
          fontSize: '27px',
          color: '#43a047'
        }}
      >
        Σύνδεση στο EventPark
      </h2>
    );

    return (
      <div>
        <div id='parent'>
          <div className='login-card'>
            <Card title={title} style={{ width: 370, borderRadius: '8px' }}>
              <h4 style={{ fontFamily: '' }}>Συμπληρώστε τα παρακάτω στοιχεία για την ολοκρήρωση της συνδεσής σας.</h4>
              <WrappedNormalLoginForm />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default CardLoginStyle;
