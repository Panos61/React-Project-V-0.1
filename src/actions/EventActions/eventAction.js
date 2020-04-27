import axios from 'axios';
import {
  EVENT_CREATED_SUCCESS,
  BEFORE_EVENT_STATE,
  EVENT_CREATED_ERROR,
} from './eventTypes';
import history from '../../history';
import { returnErrors, clearErrors } from '../../actions/errorActions';

// Create Event
export const createEvent = ({
  category,
  title,
  description,
  dateType,
  date,
  singleTime,
  ageRestricted,
  payment,
  price,
  tickets,
}) => {
  const body = JSON.stringify({
    category,
    title,
    description,
    dateType,
    date,
    singleTime,
    ageRestricted,
    payment,
    price,
    tickets,
  });

  return async (dispatch) => {
    dispatch({ type: BEFORE_EVENT_STATE });

    try {
      const res = await axios.post('/create-event', body);
      dispatch({ type: EVENT_CREATED_SUCCESS, payload: res.data });
      dispatch(clearErrors());
      history.push('/event-success');
    } catch (err) {
      dispatch(returnErrors(err.id, err.message, 'EVENT_CREATED_ERROR'));
      dispatch({ type: EVENT_CREATED_ERROR });
    }
  };
};
