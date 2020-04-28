import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CardRegisterStyle from './Components/RegisterForm/SignUpStyle';
import CardLoginForm from './Components/LoginForm/LoginFormStyle';
//import ContactFormPage from './SubPages-Test//SubPages/Contact';
import { Route, Router, Switch } from 'react-router-dom';
import MainHelpPage from './SubPages-Test/MainHelpPage';
import newprofile from './Profile/newprofile';
import NotFound from './notfound';
import CreateEvent from './CreateEvent/index';

import store from './store';
import history from './history';

// Private-Protected Route function
import PrivateRoute from './PrivateRoute';

import { Provider } from 'react-redux';
import { LOGIN_SUCCESS } from './actions/authTypes';
import Security from './Profile/Security/security';
import { PROFILE_INITIATED } from './actions/profileTypes';
import Success from './CreateEvent/success';

// Event-Tabs
import MusicTab from './Events/music';

// Stay authenticated after refreshing page
if (localStorage.token) {
  localStorage.getItem('token');
  let user =
    localStorage.getItem('user') == null
      ? null
      : JSON.parse(localStorage.getItem('user'));
  store.dispatch({ type: LOGIN_SUCCESS, payload: user });

  let profileData =
    localStorage.getItem('profileData') == null
      ? null
      : JSON.parse(localStorage.getItem('profileData'));
  store.dispatch({ type: PROFILE_INITIATED, payload: profileData });
}

//Added basic Routing for Login/Register/..
const routing = (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={CardLoginForm} />
        <Route path="/register" component={CardRegisterStyle} />
        <Route path="/help" component={MainHelpPage} />
        {/* Route path Profile  */}
        <PrivateRoute exact path="/profile" component={newprofile} />
        <Route exact path="/create-event" component={CreateEvent} />
        <PrivateRoute exact path="/event-success" component={Success} />
        <PrivateRoute exact path="/security" component={Security} />

        {/* Event-Tabs */}
        <Route path="/music-events" component={MusicTab} />

        {/* Not Found route 404*/}
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
