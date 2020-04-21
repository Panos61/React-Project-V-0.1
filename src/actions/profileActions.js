import axios from 'axios';
import { PROFILE_INITIATED, PROFILE_UPDATED } from './profileTypes';
import { returnErrors, clearErrors } from './errorActions';

// export const loadProfile = () => (dispatch) => {
//   // Profile loaded
//   axios({
//     url: '/profile',
//     method: 'get',
//   })
//     .then(
//       (res) =>
//         dispatch({
//           payload: res.data,
//         }),
//       dispatch(returnErrors())
//     )
//     .catch((err) => {
//       console.warn(err);
//     });
// };

export const initProfile = ({ name, introduction, age }) => {
  const body = JSON.stringify({ name, introduction, age });

  return async (dispatch) => {
    try {
      const res = await axios.patch('/profile', body);
      let profileData = res.data;

      localStorage.setItem('profileData', JSON.stringify(res.data.profileData));
      dispatch({ type: PROFILE_INITIATED, payload: res.data.profileData });
      dispatch(clearErrors());
      console.log(body);
    } catch (err) {
      dispatch(returnErrors(err.message));
    }
  };
};

export const updateProfile = ({ name, introduction, age }) => (dispatch) => {
  // Request body
  const body = JSON.stringify({ name, introduction, age });
  axios
    .put('/profile', body)
    .then((res) => dispatch({ type: PROFILE_UPDATED, payload: res.data }))
    .then(console.log(body))
    .catch((err) => {
      console.warn(err);
    });
};
