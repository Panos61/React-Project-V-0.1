import React, { Component } from 'react';
import { Button, Affix, Tooltip } from 'antd';
import { Route, Redirect } from 'react-router-dom';
import App from '../../App';

const text = (
  <span>
    Με την επιστροφή στην αρχική σελίδα ενδέχεται να χαθούν τα στοιχεία που
    εισάγατε στη φόρμα εγγραφής!
  </span>
);

class BackMainPage extends Component {
  state = {
    redirect: false
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />;
    }
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <Affix offsetTop={5}>
          <Tooltip placement='rightTop' title={text}>
            <Button onClick={this.setRedirect} type='dashed'>
              Αρχική Σελίδα
            </Button>
          </Tooltip>
        </Affix>

        <Route path='/' Component={App} />
      </div>
    );
  }
}

export default BackMainPage;
