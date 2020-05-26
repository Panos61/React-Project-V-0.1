import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import store from './store';

import { Provider } from 'react-redux';
import Routes from './Routes';

// when the page reloads, the auth user is still set
// const token = localStorage.getItem('token');
// if (token) {
//   setAuthorizationToken(localStorage.token);
//   store.dispatch({ type: SET_CURRENT_USER });
// }

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
