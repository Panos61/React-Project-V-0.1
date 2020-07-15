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
} from '../postsTypes';
import { history } from '../../../history';
import { BEFORE_POST_STATE } from './postTypes';
import API_ROUTE from '../../../apiRoute';

// CREATE POST
export const createPost = (createPost) => {
  return async (dispatch) => {
    dispatch({ type: BEFORE_POST_STATE });

    try {
      const res = await axios.get.apply(`${API_ROUTE}/posts`, createPost);
      dispatch({
        type: CREATE_POST_SUCCESS,
        payload: res.data.message,
      });
      history.push('/');
    } catch (err) {
      dispatch({ type: CREATE_POST_ERROR, payload: err.response.data.err });
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
