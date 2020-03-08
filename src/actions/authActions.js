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
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  axios
    .get('/auth/user', tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )

    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

export const register = ({ email, username, password, gender }) => dispatch => {
  // headers
  const config = {
    header: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenConfig}`
    }
  };

  // Request body
  const body = JSON.stringify({ email, username, password, gender });

  axios
    .post('/register', body, config)
    .then(console.log(body))
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      console.log(err);
      dispatch(
        returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
      );
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

// Set up config/headers and token
export const tokenConfig = getState => {
  // Auth token
  const token = getState().auth.token;

  const config = {
    header: {
      'Content-Type': 'application/json'
    }
  };

  // if token, add to headers
  if (token) {
    config.header['x-access-token'] = token;
  }

  return config;
};
