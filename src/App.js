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

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
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
        </Provider>
      </div>
    );
  }
}

export default App;
