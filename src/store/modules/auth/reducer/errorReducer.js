import { GET_ERRORS, CLEAR_ERRORS } from '../authTypes';

const initState = {
  message: {},
  status: null,
};

const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        message: action.payload.message,
        status: action.payload.status,
      };
    case CLEAR_ERRORS:
      return {
        message: {},
        status: null,
      };
    default:
      return state;
  }
};

export default errorReducer;
