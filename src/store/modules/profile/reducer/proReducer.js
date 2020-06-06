import {
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE_SUCCESS,
  FETCH_PROFILE,
} from '../profileTypes/index';
import isEmpty from 'lodash/isEmpty';

export const initState = {
  profile: {},
  isLoading: true,
  isAuthenticated: false,
};

const proReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return {
        ...state,
        profile: action.payload,
        isLoading: false,
        isAuthenticated: !isEmpty(action.payload),
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        isLoading: false,
        isAuthenticated: !isEmpty(action.payload),
      };
    case UPDATE_PROFILE_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default proReducer;
