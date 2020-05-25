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
  UPDATE_EMAIL_SUCCESS,
  UPDATE_EMAIL_ERROR,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  SET_CURRENT_USER,
} from '../authTypes';
import { clearErrors, returnErrors } from './errorActions';
import API_ROUTE from '../../../../apiRoute';
import { message } from 'antd';

export const getUser = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${API_ROUTE}/me`);
      let user = res.data;
      dispatch({ type: SET_CURRENT_USER, payload: user });
      dispatch(clearErrors());
    } catch (err) {
      dispatch(returnErrors(err.message));
    }
  };
};

// ** LOGIN USER **
export const login = ({ email, password }) => {
  const body = JSON.stringify({ email, password });

  return async (dispatch) => {
    dispatch({ type: BEFORE_USER_STATE });
    try {
      const res = await axios.post(`${API_ROUTE}/login`, body);
      let user = res.data;
      localStorage.setItem('token', user.token);

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
export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  setAuthorizationToken(false);
  dispatch({ type: LOGOUT_SUCCESS });
  dispatch(clearErrors());
  window.localStorage.clear();
  history.push('/');
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
export const updatePassword = ({ password, newPassword, confirmPassword }) => {
  const body = JSON.stringify({ password, newPassword, confirmPassword });
  return async (dispatch, getState) => {
    dispatch({ type: BEFORE_USER_STATE });
    const { currentUser } = getState().Auth;

    try {
      const res = await axios.put(`${API_ROUTE}/users/${currentUser.id}`, body);
      let updatedUser = res.data.message;

      dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: updatedUser });

      dispatch(clearErrors());
      message.success('Επιτυχής ενημέρωση κωδικού!', 8);
    } catch (err) {
      dispatch(returnErrors());
      dispatch({ type: UPDATE_PASSWORD_ERROR, payload: err.message.data });
      message.error('Σφάλμα κατά την αλλαγή κωδικού.Προσπαθήστε ξανά!', 8);
    }
  };
};

// ** UPDATE EMAIL **
export const updateEmail = ({ newEmail, password }) => {
  const body = JSON.stringify({ newEmail, password });
  return async (dispatch, getState) => {
    dispatch({ type: BEFORE_USER_STATE });
    const { currentUser } = getState().Auth;

    try {
      const res = await axios.put(
        `${API_ROUTE}/users-email/${currentUser.id}`,
        body
      );
      let updatedUser = res.data.message;

      dispatch({ type: UPDATE_EMAIL_SUCCESS, payload: updatedUser });

      dispatch(clearErrors());
      message.success('Επιτυχής αλλαγή E-mail!', 8);
    } catch (err) {
      dispatch(returnErrors());
      dispatch({ type: UPDATE_EMAIL_ERROR });
      message.error('Σφάλμα κατά την αλλαγή E-mail.Προσπαθήστε ξανα!', 8);
    }
  };
};

// ** FORGOT PASSWORD **
export const forgotPassword = ({ email }) => {
  const body = JSON.stringify({ email });

  return async (dispatch) => {
    dispatch({ type: BEFORE_STATE });

    try {
      const res = await axios.post(`${API_ROUTE}/password/forgot`, body);
      let passwordRequest = res.data.message;
      dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: passwordRequest });
    } catch (err) {
      dispatch({ type: FORGOT_PASSWORD_ERROR, payload: err.message.data });
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
