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
      };
    case CLEAR_ERRORS:
      return {
        message: {},
        id: null,
      };
    default:
      return state;
  }
}
