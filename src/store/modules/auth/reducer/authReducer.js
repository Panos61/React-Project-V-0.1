import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  BEFORE_STATE,
  BEFORE_USER_STATE,
} from '../authTypes';

import isEmpty from 'lodash/isEmpty';

export const initState = {
  isAuthenticated: false,
  currentUser: {},
  authSuccess: null,
  authError: null,
  isLoading: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    // USER AUTHENTICATION
    case BEFORE_STATE:
      return {
        ...state,
        authError: null,
        isLoading: true,
      };
    case BEFORE_USER_STATE:
      return {
        ...state,
        authError: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        isAuthenticated: !isEmpty(action.payload),
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case LOGIN_ERROR:
    case LOGOUT_SUCCESS:
    case REGISTER_ERROR:
      return {
        ...state,
        currentUser: {},
        isAuthenticated: false,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
