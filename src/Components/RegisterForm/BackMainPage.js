import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Button, notification, Affix, Row, Col } from 'antd';
import App from '../../App';
import './BackMainPage.css';

const openNotification = () => {
  const key = `open${Date.now}`;
  const btn = (
    <Button type='dashed' size='small' onClick={() => notification.close(key)}>
      Έγινε!
    </Button>
  );

  notification.open({
    message: 'Επιστροφή στην Αρχική Σελίδα;',
    description: 'Αν αποχωρήσετε ενδέχεται να χαθούν τα στοιχεία που εισάγατε στη φόρμα εγγραφής!',
    btn,
    key
  });
};

class BackMainPage extends Component {
  state = {
    size: 'small'
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Row>
          <Affix offsetTop={10} onChange={(affixed) => console.log('')}>
            <Button size={size} type='danger' onClick={openNotification} icon='left-circle' ghost id='BackMainBtn'>
              Αρχική Σελίδα
            </Button>
          </Affix>
        </Row>
        {/* Route to main page */}
        <Route path='/' Component={App} />
      </div>
    );
  }
}

export default BackMainPage;
