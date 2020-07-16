import axios from 'axios';
import {
  UPVOTE_SUCCESS,
  UPVOTE_ERROR,
  REMOVE_UPVOTE_SUCCESS,
  REMOVE_UPVOTE_ERROR,
  GET_UPVOTES_SUCCESS,
  GET_UPVOTES_ERROR,
} from './upvoteTypes';
import API_ROUTE from '../../../apiRoute';
import { returnErrors } from '../auth/actions/errorActions';

export const createUpvote = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${API_ROUTE}/upvotes/${id}`);
      dispatch({
        type: UPVOTE_SUCCESS,
        payload: { postID: id, upvote: res.data.message },
      });
    } catch (err) {
      dispatch({ type: UPVOTE_ERROR, payload: err.message });
      dispatch(returnErrors());
    }
  };
};

export const fetchUpvotes = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${API_ROUTE}/upvotes/${id}`);
      dispatch({
        type: GET_UPVOTES_SUCCESS,
        payload: { postID: id, upvotes: res.data.message },
      });
    } catch (err) {
      dispatch({ type: GET_UPVOTES_ERROR, payload: err.message });
      dispatch(returnErrors());
    }
  };
};

export const removeUpvote = (details) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${API_ROUTE}/upvotes/${details.id}`);
      dispatch({
        type: REMOVE_UPVOTE_SUCCESS,
        payload: {
          upvoteID: details.id,
          postID: details.postID,
        },
      });
    } catch (err) {
      dispatch({ type: REMOVE_UPVOTE_ERROR, payload: err.message.data.error });
    }
  };
};
