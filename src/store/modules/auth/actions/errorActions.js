import { GET_ERRORS, CLEAR_ERRORS } from '../authTypes';

// RETURN ERRORS
export const returnErrors = (message, id, status = null) => {
  return {
    type: GET_ERRORS,
    payload: { message, id, status },
  };
};

// CLEAR ERRORS
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
