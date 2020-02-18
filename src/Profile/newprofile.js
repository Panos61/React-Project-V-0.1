import React, { Component } from 'react';
import Pro_navbar from './Pro_navbar';
import { Layout, Icon, Avatar } from 'antd';

import './profile.css';

import UpperProfile from './profile-upper/Upper-Profile';

const { Footer } = Layout;

class newprofile extends React.Component {
  render() {
    return (
      <div>
        <Pro_navbar />
        <section>
          <UpperProfile />
        </section>
        <footer>
          <Footer
            style={{
              textAlign: 'center',
              backgroundColor: 'unset'
            }}
          >
            EventPark ©2019 Created with <Icon type="heart" theme="filled" /> by
            us!
          </Footer>
        </footer>
      </div>
    );
  }
}

export default newprofile;
