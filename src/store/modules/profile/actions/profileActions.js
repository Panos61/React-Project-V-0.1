import axios from 'axios';
import history from '../../../../history';
import {
  INIT_PROFILE_SUCCESS,
  INIT_PROFILE_ERROR,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  DELETE_PROFILE_SUCCESS,
  DELETE_PROFILE_ERROR,
  FETCH_PROFILE,
} from '../profileTypes';
import { clearErrors, returnErrors } from '../../auth/actions/errorActions';
import API_ROUTE from '../../../../apiRoute';
import { message } from 'antd';

// ** GET PROFILE STATE **
export const getProfile = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${API_ROUTE}/myProfile`);
      let profile = res.data;
      dispatch({ type: FETCH_PROFILE, payload: profile });
      dispatch(clearErrors());
    } catch (err) {
      dispatch(returnErrors(err.message));
    }
  };
};
