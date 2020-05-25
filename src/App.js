import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Search from './Components/OtherMainPage/Search';
import HorizontalSider from './Components/OtherMainPage/HorizontalSider';
import { BackTop } from 'antd';
import Cities from './Components/OtherMainPage/Cities';
//import ContactForm from './SubPages-Test/SubPages/Contact';
import MainHelpPage from './HelpPages/MainHelpPage';
import { Route } from 'react-router-dom';
import FooterMain from './Footer';

import { useDispatch } from 'react-redux';
import setAuthorizationToken, {
  getUser,
} from './store/modules/auth/actions/authActions';

const App = () => {
  const dispatch = useDispatch();

  //when the page reloads, the auth user is still set
  if (localStorage.token) {
    setAuthorizationToken(localStorage.token);

    dispatch(getUser());
  }

  return (
    <>
      <div className="main-page_style">
        <Navbar />
        <section>
          <Search />
          <HorizontalSider />

          <BackTop />
          <Cities />
        </section>
      </div>
      <footer>
        <FooterMain />
      </footer>
      {/* Routes */}
      <Route path="/Help" Component={MainHelpPage} />
    </>
  );
};

export default App;
