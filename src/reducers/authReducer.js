import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../actions/authTypes';
import {
  PROFILE_CREATED,
  PROFILE_LOADED,
  PROFILE_UPDATED,
} from '../actions/profileTypes';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null,
  profileInitialized: false,
  profileData: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    // USER AUTHENTICATION
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        // user: action.payload,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    // PROFILE
    case PROFILE_CREATED:
      return {
        ...state,
        isInitialized: true,
        profileData: action.payload,
        isAuthenticated: true,
      };
    case PROFILE_LOADED:
      return {
        ...state,
        isInitialized: true,
        profileData: action.payload,
        isAuthenticated: true,
      };
    case PROFILE_UPDATED:
      return {
        ...state,
        isInitialized: true,
        profileData: action.payload,
        isAuthenticated: true,
      };
    default:
      return state;
  }
}
