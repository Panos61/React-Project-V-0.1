import axios from 'axios';
import history from '../../../../history';
import {
  REGISTER_SUCCESS,
  BEFORE_USER_STATE,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_ERROR,
  LOGOUT_SUCCESS,
} from '../authTypes';
import { clearErrors, returnErrors } from './errorActions';

// ** LOGIN USER **
export const login = ({ email, password }) => {
  const body = JSON.stringify({ email, password });

  return async (dispatch) => {
    dispatch({ type: BEFORE_USER_STATE });
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
      dispatch(returnErrors(err.message, err.id, 'LOGIN_ERROR'));
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };
};

// ** REGISTER USER **
export const register = ({ email, username, password, gender }) => {
  const body = JSON.stringify({ email, username, password, gender });
  return async (dispatch) => {
    dispatch({ type: BEFORE_USER_STATE });
    try {
      await axios.post('/register', body, getHeaders());
      dispatch({ type: REGISTER_SUCCESS });
      dispatch(clearErrors());
      history.push('/login');
    } catch (err) {
      dispatch(returnErrors(err.message, err.id, 'REGISTER_ERROR'));
      dispatch({
        type: REGISTER_ERROR,
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

// ** ALTERNATIVE SOLUTION TO LOGIN

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
