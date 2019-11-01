import React, { Component } from 'react';
import { Button, Affix, Modal } from 'antd';
import { Link, Route } from 'react-router-dom';
import App from '../../App';
import './BackMainPage.css';

const { confirm } = Modal;

function showDeleteConfirm() {
  confirm({
    title: 'Επιστροφή στην Αρχική Σελίδα;',
    content: 'Με την επιστροφή στην αρχική σελίδα ενδέχεται να χαθούν τα στοιχεία που εισάγατε στη φόρμα εγγραφής!',
    okText: 'Έγινε',
    okType: 'danger',
    cancelText: 'Άκυρο',
    onOk() {
      /*  <Link to='/' />; */
    }
  });
}

class BackMainPage extends Component {
  render() {
    return (
      <div>
        <Affix offsetTop={5}>
          <Button onClick={showDeleteConfirm} type='dashed'>
            Αρχική Σελίδα
          </Button>
        </Affix>

        <Route path='/' Component={App} />
      </div>
    );
  }
}

export default BackMainPage;
