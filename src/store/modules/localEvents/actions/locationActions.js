import { FETCH_LOCAL_EVENTS_SUCCESS, FETCH_LOCAL_EVENTS_ERROR } from '../index';
import axios from 'axios';
import API_ROUTE from '../../../../apiRoute';
import { returnErrors } from '../../auth/actions/errorActions';

export const fetchLocalEvents = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${API_ROUTE}/location_events/${id}`);
      dispatch({ type: FETCH_LOCAL_EVENTS_SUCCESS, payload: res.data.message });
    } catch (err) {
      dispatch({ type: FETCH_LOCAL_EVENTS_ERROR, payload: err.message });
      dispatch(returnErrors());
    }
  };
};
