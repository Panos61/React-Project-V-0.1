import axios from 'axios';
import { PROFILE_CREATED, PROFILE_LOADED } from './profileTypes';
import { returnErrors } from './errorActions';
import { getHeaders } from './authActions';

export const loadProfile = () => dispatch => {
  // Profile loaded
  axios({
    url: '/profile',
    method: 'get'
    //headers: getHeaders()
  })
    .then(
      res =>
        dispatch({
          type: PROFILE_LOADED,
          payload: res.data
        }),
      dispatch(returnErrors())
    )
    .catch(err => {
      console.warn(err);
    });
};

export const createProfile = ({ name, introduction, age }) => dispatch => {
  // Request body
  const body = JSON.stringify({ name, introduction, age });
  axios
    .post('/profile', body)
    .then(res => dispatch({ type: PROFILE_CREATED, payload: res.data }))
    .then(console.log(body))
    .catch(err => {
      console.warn(err);
    });
};
