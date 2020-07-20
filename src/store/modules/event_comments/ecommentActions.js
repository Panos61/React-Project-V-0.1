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
import { returnErrors } from '../auth/actions/errorActions';

// POST EVENT COMMENT
export const postComment = (details, commentSuccess) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${API_ROUTE}/event_comments/${details.event_id}`,
        details
      );
      dispatch({
        type: EVENT_COMMENT_POST_SUCCESS,
        payload: {
          eventID: details.event_id,
          comment: res.data.message,
        },
      });
      commentSuccess();
    } catch (err) {
      dispatch({ type: EVENT_COMMENT_POST_ERROR, payload: err.message });
      dispatch(returnErrors());
    }
  };
};

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
      dispatch(returnErrors());
    }
  };
};

// EDIT COMMENT
export const updateComment = (updateDetails, updateSuccess) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `${API_ROUTE}/event_comments/${updateDetails.id}`,
        updateDetails
      );
      dispatch({
        type: EDIT_EV_COMMENT_SUCCESS,
        payload: { comment: res.data.message },
      });
      updateSuccess();
    } catch (err) {
      dispatch({ type: EDIT_EV_COMMENT_ERROR, payload: err.message });
      dispatch(returnErrors());
    }
  };
};

// DELETE COMMENT
export const deleteComment = (details, deleteSuccess) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(
        `${API_ROUTE}/event_comments/${details.id}`,
        details
      );
      dispatch({
        type: DELETE_EV_COMMENT_SUCCESS,
        payload: { id: details.id, eventID: details.eventID },
      });
      deleteSuccess();
    } catch (err) {
      dispatch({ type: DELETE_EV_COMMENT_ERROR, payload: err.message });
      dispatch(returnErrors());
    }
  };
};
