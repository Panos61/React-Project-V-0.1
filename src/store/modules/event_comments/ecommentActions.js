import {
  EVENT_COMMENT_POST_SUCCESS,
  EVENT_COMMENT_POST_ERROR,
  DELETE_EV_COMMENT_SUCCESS,
  FETCH_EV_COMMENTS_SUCCESS,
  FETCH_EV_COMMENTS_ERROR,
  DELETE_EV_COMMENT_ERROR,
  EDIT_EV_COMMENT_SUCCESS,
  EDIT_EV_COMMENT_ERROR,
} from './types';
import axios from 'axios';
import API_ROUTE from '../../../apiRoute';

// POST EVENT COMMENT

// FETCH COMMENTS
export const fetchComments = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${API_ROUTE}/event_comments/${id}`);
      dispatch({
        type: FETCH_EV_COMMENTS_SUCCESS,
        payload: {
          eventID: id,
          comments: res.data.message,
        },
      });
    } catch (err) {
      dispatch({ type: FETCH_EV_COMMENTS_ERROR, payload: err.message });
    }
  };
};
