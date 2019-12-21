import React, { Component } from 'react';
import { Card } from 'antd';
import WrappedNormalLoginForm from './LoginForm';
import './LoginFormStyle.css';
import FooterMain from '../../FooterTest';
import BackMainPageLogin from './BackMainPageLogin';

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
        <section id='login-page_style'>
          <BackMainPageLogin />
          <div id='parent'>
            <div className='login-card'>
              <Card title={title} style={{ borderRadius: '4px' }}>
                <h4>
                  Συμπληρώστε τα παρακάτω στοιχεία για την ολοκλήρωση της
                  συνδεσής σας.
                </h4>
                <WrappedNormalLoginForm />
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

export default CardLoginStyle;
