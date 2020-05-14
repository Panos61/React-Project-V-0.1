import axios from 'axios';
import history from '../../../../history';
import {
  REGISTER_SUCCESS,
  BEFORE_USER_STATE,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_ERROR,
  LOGOUT_SUCCESS,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  BEFORE_STATE,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_ERROR,
} from '../authTypes';
import { clearErrors, returnErrors } from './errorActions';
import API_ROUTE from '../../../../apiRoute';

// ** LOGIN USER **
export const login = ({ email, password }) => {
  const body = JSON.stringify({ email, password });

  return async (dispatch) => {
    dispatch({ type: BEFORE_USER_STATE });
    try {
      const res = await axios.post(`${API_ROUTE}/login`, body);
      let user = res.data;
      localStorage.setItem('token', user.token);

      localStorage.setItem('user_data', JSON.stringify(user));
      setAuthorizationToken(user.token);

      dispatch({ type: LOGIN_SUCCESS, payload: user });
      dispatch(clearErrors());
      setTimeout(() => {
        history.push('/');
      }, 450);
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
      await axios.post(`${API_ROUTE}/register`, body);
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
    setAuthorizationToken(false);
    dispatch({ type: LOGOUT_SUCCESS });
    dispatch(clearErrors());
    window.localStorage.clear();
    history.push('/');
  };
};

// ** DELETE USER **
export const deleteUser = (id) => {
  return async (dispatch) => {
    dispatch({ type: BEFORE_STATE });
    try {
      const res = await axios.delete(`${API_ROUTE}/users/${id}`);
      let deleteMessage = res.data.message;
      dispatch({ type: DELETE_USER_SUCCESS, payload: deleteMessage });
      window.localStorage.clear();
      window.location.href = '/';
      dispatch(clearErrors());
    } catch (err) {
      dispatch({ type: DELETE_USER_ERROR, payload: err.message.data });
      dispatch(returnErrors());
    }
  };
};

// ** UPDATE PASSWORD **
export const updatePassword = (
  { password, newPassword, email },
  clearInput
) => {
  const body = JSON.stringify({ password, newPassword, email });
  return async (dispatch, getState) => {
    dispatch({ type: BEFORE_USER_STATE });
    const { currentUser } = getState().Auth;

    try {
      const res = await axios.put(`${API_ROUTE}/users/${currentUser.id}`, body);
      let updatedPassword = res.data.message;

      dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: updatedPassword });
      window.localStorage.setItem('user_data', JSON.stringify(updatedPassword));
      dispatch(clearErrors());
      clearInput();
    } catch (err) {
      dispatch(returnErrors());
      dispatch({ type: UPDATE_PASSWORD_ERROR, payload: err.message.data });
    }
  };
};

// Token Auth
export default function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

// ** ALTERNATIVE TOKEN AUTH

// export const getHeaders = () => {
//   // Auth token
//   const token = localStorage.getItem('token');

//   const config = {
//     'Content-Type': 'application/json',
//   };

//   // if token, add to headers
//   if (token) {
//     config['Authorization'] = `Bearer ${token}`;
//   }

//   return config;
// };

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
