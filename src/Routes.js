import React from 'react';
import App from './App';

import CardRegisterStyle from './Components/RegisterForm/SignUpStyle';
import CardLoginForm from './Components/LoginForm/LoginFormStyle';
import { Route, Router, Switch } from 'react-router-dom';
import MainHelpPage from './HelpPages/MainHelpPage';
import NotFound from './notfound';
import CreateEvent from './CreateEvent/index';

import store from './store';
import history from './history';

// Private-Protected Route function
import PrivateRoute from './PrivateRoute';

import Success from './CreateEvent/success';
import SettingsMainPage from './Settings/settings';
import Account from './Settings/account/account';
import Security from './Settings/security/security';
import DataDisplay from './Events/Layout/DataDisplay';
import MusicPage from './Events/Event-SubPages/MusicPage';
import resetPasswordPage from './Components/ResetPassword/resetPass';
import SportsPage from './Events/Event-SubPages/SportsPage';
import EnterPage from './Events/Event-SubPages/EnterPage';
import CinemaPage from './Events/Event-SubPages/CinemaPage';
import DancePage from './Events/Event-SubPages/DancePage';

import { useDispatch } from 'react-redux';
import setAuthorizationToken, {
  getUser,
} from './store/modules/auth/actions/authActions';
import { SET_CURRENT_USER } from './store/modules/auth/authTypes';
import ArtPage from './Events/Event-SubPages/ArtPage';
import KidsPage from './Events/Event-SubPages/KidsPage';
import SocialPage from './Events/Event-SubPages/SocialPage';
import UserHistory from './Settings/user-history';
import Feed from './Feed/Feed';
import Home from './Feed/pages/home';
import Saved from './Feed/pages/saved';
import Profile from './Profile/Profile';
import Layout from './Feed/layout';
import SideNav from './Feed/Components/Sider';
import Notifications from './Feed/pages/notifications';
import CitiesDisplay from './Cities_Display/CitiesMain';
import CityFeed from './Cities_Display/City_Feed';

const Routes = () => {
  // Keep User Logged In based on token
  const dispatch = useDispatch();
  if (localStorage.token) {
    setAuthorizationToken(localStorage.token);

    dispatch(getUser());
    store.dispatch({ type: SET_CURRENT_USER });
  }

  return (
    <Router history={history}>
      <Switch>
        {/* Basic Routes */}
        <Route exact path="/" component={App} />
        <Route path="/login" component={CardLoginForm} />
        <Route path="/register" component={CardRegisterStyle} />
        <Route path="/help" component={Feed} />
        <Route path="/reset-password" component={resetPasswordPage} />

        {/* Settings Routes */}
        <PrivateRoute exact path="/settings/:id" component={SettingsMainPage} />
        <PrivateRoute exact path="/account/:id" component={Account} />
        <PrivateRoute exact path="/security/:id" component={Security} />
        <PrivateRoute exact path="/history/:id" component={UserHistory} />

        {/* Create Events Routes */}
        <PrivateRoute exact path="/create-event" component={CreateEvent} />
        <PrivateRoute exact path="/event-success" component={Success} />

        {/* Event-Data */}
        <Route path="/event/:id" component={DataDisplay} />

        {/* Event-Types Routes */}
        <Route path="/music" component={MusicPage} />
        <Route path="/sports" component={SportsPage} />
        <Route path="/entertainment" component={EnterPage} />
        <Route path="/cinema" component={CinemaPage} />
        <Route path="/dance" component={DancePage} />
        <Route path="/arts" component={ArtPage} />
        <Route path="/kids" component={KidsPage} />
        <Route path="/social_events" component={SocialPage} />

        {/* Cities Feed */}
        <Route path="/locations" component={CitiesDisplay} />
        <Route path="/events/city" component={CityFeed} />

        {/* Social Media Part */}
        <Layout>
          <SideNav />
          <Route path="/home" component={Home} />
          <Route path="/saved" component={Saved} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/profile" component={Profile} />
        </Layout>

        {/* Not Found Route 404*/}
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
