import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  BEFORE_STATE,
  BEFORE_USER_STATE,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_ERROR,
  UPDATE_EMAIL_SUCCESS,
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
        currentUser: action.payload,
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
    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
      };
    case UPDATE_PASSWORD_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case UPDATE_EMAIL_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isUpdatingUser: true,
        isLoading: false,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        currentUser: {},
        isAuthenticated: false,
        isLoading: false,
      };
    case DELETE_USER_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
