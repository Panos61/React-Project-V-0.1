import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CardRegisterStyle from './Components/RegisterForm/SignUpStyle';
import CardLoginForm from './Components/LoginForm/LoginFormStyle';
import ContactFormPage from './SubPages-Test/Contact';
import { Route, BrowserRouter as Router } from 'react-router-dom';

//Added basic Routing for Login/Register
const routing = (
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/login' component={CardLoginForm} />
      <Route path='/register' component={CardRegisterStyle} />
      <Route path='/contact' component={ContactFormPage} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
