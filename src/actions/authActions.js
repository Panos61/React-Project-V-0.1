import axios from 'axios';
import { returnErrors } from './errorActions';
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './authTypes';

// load user
export const loadUser = () => dispatch => {
  // User loading
  dispatch({ type: USER_LOADING });
  console.log(getHeaders());
  axios({
    url: '/auth/user',
    method: 'get',
    headers: getHeaders()
  })
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )

    .catch(err => {
      //dispatch(returnErrors(err.response.data, err.response.status));
      console.log(err);
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// **REGISTER USER**
export const register = ({ email, username, password, gender }) => dispatch => {
  // Request body
  const body = JSON.stringify({ email, username, password, gender });

  console.log(body);
  axios
    .post('/register', body, getHeaders())
    .then(console.log(body))
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch(returnErrors(err.res.data, err.res.status, 'REGISTER_FAIL'));
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

// ** LOGIN USER **
export const login = ({ email, password }) => dispatch => {
  const body = JSON.stringify({ email, password });
  console.log(body);

  axios
    .post('/login', body, getHeaders())
    .then(console.log(body))
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      localStorage.removeItem('token', err.res.data.token);
      dispatch(returnErrors(err.res.data, err.res.status, 'LOGIN_FAIL'));
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// ** LOGOUT USER **
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

// Set up config/headers and token
export const getHeaders = () => {
  // Auth token
  const token = localStorage.getItem('token');

  const config = {
    'Content-Type': 'application/json'
  };

  // if token, add to headers
  if (token) {
    config['Authorization'] = `Bearer ${token}`;
  }

  return config;
};
