import React, { Component } from 'react';
import Pro_navbar from './Pro_navbar';
import { HeartFilled } from '@ant-design/icons';
import { Layout, BackTop } from 'antd';

import './profile.css';

import UpperProfile from './profile-upper/Upper-Profile';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/authActions';

const { Footer } = Layout;

class newprofile extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <div>
        <Provider store={store}>
          <Pro_navbar />
          <section>
            <UpperProfile />
            <BackTop />
          </section>
          <footer>
            <Footer
              style={{
                textAlign: 'center',
                backgroundColor: 'unset'
              }}
            >
              EventPark ©2020 Created with <HeartFilled /> by us!
            </Footer>
          </footer>
        </Provider>
      </div>
    );
  }
}

export default newprofile;
