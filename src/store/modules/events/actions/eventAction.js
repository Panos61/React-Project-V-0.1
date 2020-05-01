import axios from 'axios';
import {
  CREATE_EVENT_SUCCESS,
  BEFORE_STATE_EVENT,
  CREATE_EVENT_ERROR,
  FETCH_EVENTS,
  FETCH_EVENTS_ERROR,
} from '../eventTypes/eventTypes';
import history from '../../../../history';
import { returnErrors, clearErrors } from '../../auth/actions/errorActions';

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
    dispatch({ type: BEFORE_STATE_EVENT });

    try {
      const res = await axios.post('/create-event', body);
      dispatch({ type: CREATE_EVENT_SUCCESS, payload: res.data });
      dispatch(clearErrors());
      history.push('/event-success');
    } catch (err) {
      dispatch(returnErrors(err.id, err.message, 'EVENT_CREATED_ERROR'));
      dispatch({ type: CREATE_EVENT_ERROR });
    }
  };
};

export const fetchEvents = () => {
  return async (dispatch) => {
    dispatch({ type: BEFORE_STATE_EVENT });

    try {
      const res = await axios.get('/music');
      dispatch({ type: FETCH_EVENTS, payload: res.data });
    } catch (err) {
      dispatch({ type: FETCH_EVENTS_ERROR });
    }
  };
};
