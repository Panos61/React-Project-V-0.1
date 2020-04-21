import {
  BEFORE_STATE,
  SET_CURRENT_USER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../actions/authTypes';
import { PROFILE_INITIATED, PROFILE_UPDATED } from '../actions/profileTypes';
import isEmpty from 'lodash/isEmpty';

export const initialState = {
  isAuthenticated: null,
  isLoading: false,
  user: {},
  profileData: {},
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // USER AUTHENTICATION
    case BEFORE_STATE:
      return {
        ...state,
        isLoading: true,
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
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      return {
        ...state,
        user: {},
        isAuthenticated: false,
        isLoading: false,
      };
    // PROFILE
    case PROFILE_INITIATED:
      return {
        ...state,
        profileData: action.payload,
        isLoading: false,
        isAuthenticated: true,
      };

    case PROFILE_UPDATED:
      return {
        ...state,
        profileData: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
