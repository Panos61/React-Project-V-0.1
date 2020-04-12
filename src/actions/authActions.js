import axios from 'axios';
import { returnErrors, clearErrors } from './errorActions';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  BEFORE_STATE,
} from './authTypes';

import history from '../history';

// ** LOGIN USER **
export const login = ({ email, password }) => {
  const body = JSON.stringify({ email, password });

  return async (dispatch) => {
    dispatch({ type: BEFORE_STATE });
    try {
      const res = await axios.post('/login', body, getHeaders());
      let user = res.data;
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      dispatch({ type: LOGIN_SUCCESS, payload: user });
      dispatch(clearErrors());
      setTimeout(() => {
        history.push('/');
      }, 500);
    } catch (err) {
      dispatch(returnErrors(err.message, err.id, 'LOGIN_FAIL'));
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };
};

// ** ALTERNATIVE SOLUTION

// export const login = ({ email, password }) => (dispatch) => {
//   const body = JSON.stringify({ email, password });

//   axios.post('/login', body, getHeaders()).then((res) => {
//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: res.data,
//     });
//     localStorage.setItem('token', res.data.token);
//     localStorage.setItem('user', JSON.stringify(res.data.user));

//     history.push('/');
//     return res.data;
//   });
// };

// **REGISTER USER**
export const register = ({ email, username, password, gender }) => {
  const body = JSON.stringify({ email, username, password, gender });
  return async (dispatch) => {
    dispatch({ type: BEFORE_STATE });
    try {
      await axios.post('/register', body, getHeaders());
      dispatch({ type: REGISTER_SUCCESS });
      dispatch(clearErrors());
      history.push('/login');
    } catch (err) {
      dispatch(returnErrors(err.message, err.id, 'REGISTER_FAIL'));
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };
};

// ** LOGOUT USER **
export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: LOGOUT_SUCCESS });
    dispatch(clearErrors());
    window.localStorage.clear();
    history.push('/');
  };
};

// Set up config/headers and token
export const getHeaders = () => {
  // Auth token
  const token = localStorage.getItem('token');

  const config = {
    'Content-Type': 'application/json',
  };

  // if token, add to headers
  if (token) {
    config['Authorization'] = `Bearer ${token}`;
  }

  return config;
};
