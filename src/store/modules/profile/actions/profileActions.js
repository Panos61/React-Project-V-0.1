import axios from 'axios';
import history from '../../../../history';
import {
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
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

// ** UPDATE PROFILE **
export const updateProfile = ({
  firstName,
  lastName,
  introduction,
  age,
  location,
  sharedLink,
}) => {
  const body = JSON.stringify({
    firstName,
    lastName,
    introduction,
    age,
    location,
    sharedLink,
  });
  return async (dispatch, getState) => {
    const { currentUser } = getState().Auth;
    try {
      const res = await axios.put(
        `${API_ROUTE}/profile/${currentUser.id}`,
        body
      );
      let updatedProfile = res.data;
      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: updatedProfile });
      dispatch(clearErrors());
      message.success('Επιτυχής ενημέρωση προφίλ!', 8);
    } catch (err) {
      dispatch({
        type: UPDATE_PROFILE_ERROR,
      });
      dispatch(returnErrors(err.message, err.id, 'UPDATE_PROFILE_ERROR'));
      message.error('Σφάλμα κατά την ενημέρωση του προφίλ!', 8);
    }
  };
};
