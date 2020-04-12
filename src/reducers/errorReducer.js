import { GET_ERRORS, CLEAR_ERRORS } from '../actions/authTypes';

const initialState = {
  message: {},
  status: null,
  id: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        message: action.payload.message,
        id: action.payload.id,
        status: action.payload.status,
      };
    case CLEAR_ERRORS:
      return {
        message: {},
        id: null,
        status: null,
      };
    default:
      return state;
  }
}
