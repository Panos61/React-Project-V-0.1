import React from 'react';
import { Layout, BackTop } from 'antd';
import Pro_Navbar from './Navbar/Pro_navbar';
import { HeartFilled } from '@ant-design/icons';
import Upper from './Upper/Upper';

const { Footer } = Layout;

const Profile = () => {
  return (
    <div>
      <Pro_Navbar />
      <section>
        <Upper />
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
    </div>
  );
};

export default Profile;
