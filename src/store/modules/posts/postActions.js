import axios from 'axios';
import {
  BEFORE_STATE_POST,
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
  GET_POST_SUCCESS,
  GET_POST_ERROR,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_ERROR,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
  FETCH_AUTH_POSTS,
  FETCH_AUTH_POSTS_ERROR,
} from './postTypes';
import history from '../../../history';
import { BEFORE_POST_STATE } from './postTypes';
import API_ROUTE from '../../../apiRoute';
import { returnErrors, clearErrors } from '../auth/actions/errorActions';

// CREATE POST
export const createPost = ({ content }) => {
  const body = JSON.stringify({ content });
  return async (dispatch) => {
    dispatch({ type: BEFORE_POST_STATE });

    try {
      const res = await axios.post(`${API_ROUTE}/posts`, body);
      dispatch({
        type: CREATE_POST_SUCCESS,
        payload: res.data.message,
      });
      dispatch(clearErrors());
    } catch (err) {
      dispatch({ type: CREATE_POST_ERROR, payload: err.response });
      dispatch(returnErrors());
    }
  };
};

// FETCH POSTS
export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch({ type: BEFORE_POST_STATE });

    try {
      const res = await axios.get(`${API_ROUTE}/posts`);
      dispatch({ type: FETCH_POSTS, payload: res.data.message });
    } catch (err) {
      dispatch({ type: FETCH_POSTS_ERROR, payload: err.response });
    }
  };
};

// FETCH POST
export const fetchPost = (id) => {
  return async (dispatch) => {
    dispatch({ type: BEFORE_POST_STATE });

    try {
      const res = await axios.get(`${API_ROUTE}/posts/${id}`);
      dispatch({ type: GET_POST_SUCCESS, payload: res.data.message });
      dispatch(clearErrors());
    } catch (err) {
      dispatch({ type: GET_POST_ERROR, payload: err.response });
      dispatch(returnErrors());
      history.push('/home');
    }
  };
};

// FETCH AUTH POSTS
export const fetchAuthPosts = (id) => {
  return async (dispatch) => {
    dispatch({ type: BEFORE_POST_STATE });

    try {
      const res = await axios.get(`${API_ROUTE}/user_posts/${id}`);
      dispatch({ type: FETCH_AUTH_POSTS, payload: res.data.message });
      dispatch(clearErrors());
    } catch (err) {
      dispatch({ type: FETCH_AUTH_POSTS_ERROR, payload: err.response });
      dispatch(returnErrors());
    }
  };
};

// UPDATE POST
export const updatePost = () => {
  return async (dispatch) => {
    dispatch({ type: BEFORE_POST_STATE });

    try {
      const res = await axios.put(`${API_ROUTE}/posts/`);
      dispatch({ type: UPDATE_POST_SUCCESS, payload: res.data.message });
      dispatch(clearErrors());
    } catch (err) {
      dispatch({ type: UPDATE_POST_ERROR, payload: err.response });
      dispatch(returnErrors());
    }
  };
};

// DELETE POST
export const deletePost = (id) => {
  return async (dispatch) => {
    dispatch({ type: BEFORE_POST_STATE });

    try {
      const res = await axios.delete(`${API_ROUTE}/posts/${id}`);
      dispatch({
        type: DELETE_POST_SUCCESS,
        payload: { deletedID: id, message: res.data.message },
      });
      history.push('/home');
      dispatch(clearErrors());
    } catch (err) {
      dispatch({ type: DELETE_POST_ERROR, payload: err.response });
      dispatch(returnErrors());
    }
  };
};
