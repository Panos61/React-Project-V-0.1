import React, { Component } from 'react';
import Pro_navbar from '../Profile/Navbar/Pro_navbar';
import { HeartFilled } from '@ant-design/icons';
import { Layout, BackTop } from 'antd';

import './profile.css';

import UpperProfile from './profile-upper/Upper-Profile';

import { Provider } from 'react-redux';
import store from '../store';

const { Footer } = Layout;

class profile extends Component {
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
                backgroundColor: 'unset',
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

export default profile;
