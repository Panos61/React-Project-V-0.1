import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
//import PopBtn from './Components/OtherMainPage/PopBtn';
import Search from './Components/OtherMainPage/Search';
import { BackTop, Layout } from 'antd';
import Cities from './Components/OtherMainPage/Cities';
//import ContactForm from './SubPages-Test/SubPages/Contact';
import MainHelpPage from './SubPages-Test/MainHelpPage';
import { Route } from 'react-router-dom';
import FooterMain from './FooterTest';

const Footer = Layout;

class App extends Component {
  render() {
    return (
      <div className='main-page-style'>
        <Navbar />

        <Search />
        <BackTop />
        <Cities />

        <FooterMain />

        {/* Routes */}
        <Route path='/Help' Component={MainHelpPage} />
      </div>
    );
  }
}

export default App;
