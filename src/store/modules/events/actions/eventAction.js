import axios from 'axios';
import {
  CREATE_EVENT_SUCCESS,
  BEFORE_STATE_EVENT,
  CREATE_EVENT_ERROR,
  FETCH_EVENTS,
  FETCH_EVENTS_ERROR,
  FETCH_AUTH_EVENTS,
  FETCH_AUTH_EVENTS_ERROR,
  GET_EVENT_SUCCESS,
  GET_EVENT_ERROR,
} from '../eventTypes/eventTypes';
import history from '../../../../history';
import { returnErrors, clearErrors } from '../../auth/actions/errorActions';
import API_ROUTE from '../../../../apiRoute';
import { SET_CURRENT_USER } from '../../auth/authTypes';

// ** CREATE EVENT **
export const createEvent = ({
  category,
  title,
  description,
  avatar,
  city,
  address,
  place,
  dateType,
  date,
  singleTime,
  urlYoutube,
  // ageRestricted,
  // payment,
  // price,
  // tickets,
  comments,
}) => {
  const body = JSON.stringify({
    category,
    title,
    description,
    avatar,
    city,
    address,
    place,
    dateType,
    date,
    singleTime,
    urlYoutube,
    //ageRestricted,
    // payment,
    // price,
    //tickets,
    comments,
  });

  return async (dispatch) => {
    dispatch({ type: BEFORE_STATE_EVENT });

    try {
      const res = await axios.post(`${API_ROUTE}/create-event`, body);
      dispatch({ type: CREATE_EVENT_SUCCESS, payload: res.data });
      dispatch(clearErrors());
      history.push('/event-success');
    } catch (err) {
      dispatch(returnErrors(err.id, err.message, 'EVENT_CREATED_ERROR'));
      dispatch({ type: CREATE_EVENT_ERROR, payload: err.message });
    }
  };
};
// ** FETCH MUSIC EVENTS **
export const fetchMusicEvents = () => {
  return async (dispatch) => {
    dispatch({ type: BEFORE_STATE_EVENT });

    try {
      const res = await axios.get(`${API_ROUTE}/music`);
      dispatch({ type: FETCH_EVENTS, payload: res.data.message });
    } catch (err) {
      dispatch({ type: FETCH_EVENTS_ERROR, payload: err.message });
    }
  };
};

// ** FETCH SPORTS EVENTS **
export const fetchSportEvents = () => {
  return async (dispatch) => {
    dispatch({ type: BEFORE_STATE_EVENT });

    try {
      const res = await axios.get(`${API_ROUTE}/sports`);
      dispatch({ type: FETCH_EVENTS, payload: res.data.message });
    } catch (err) {
      dispatch({ type: FETCH_EVENTS_ERROR, payload: err.message });
    }
  };
};

// ** FETCH ENTERTAINMENT EVENTS **
export const fetchEnterEvents = () => {
  return async (dispatch) => {
    dispatch({ type: BEFORE_STATE_EVENT });

    try {
      const res = await axios.get(`${API_ROUTE}/entertainment`);
      dispatch({ type: FETCH_EVENTS, payload: res.data.message });
    } catch (err) {
      dispatch({ type: FETCH_EVENTS_ERROR, payload: err.message });
    }
  };
};

// ** FETCH CINEMA EVENTS **
export const fetchCinemaEvents = () => {
  return async (dispatch) => {
    dispatch({ type: BEFORE_STATE_EVENT });

    try {
      const res = await axios.get(`${API_ROUTE}/cinema`);
      dispatch({ type: FETCH_EVENTS, payload: res.data.message });
    } catch (err) {
      dispatch({ type: FETCH_EVENTS_ERROR, payload: err.message });
    }
  };
};

// ** FETCH ART EVENTS **
export const fetchArtEvents = () => {
  return async (dispatch) => {
    dispatch({ type: BEFORE_STATE_EVENT });

    try {
      const res = await axios.get(`${API_ROUTE}/arts`);
      dispatch({ type: FETCH_EVENTS, payload: res.data.message });
    } catch (err) {
      dispatch({ type: FETCH_EVENTS_ERROR, payload: err.message });
    }
  };
};

// ** FETCH DANCE EVENTS **
export const fetchDanceEvents = () => {
  return async (dispatch) => {
    dispatch({ type: BEFORE_STATE_EVENT });

    try {
      const res = await axios.get(`${API_ROUTE}/dance`);
      dispatch({ type: FETCH_EVENTS, payload: res.data.message });
    } catch (err) {
      dispatch({ type: FETCH_EVENTS_ERROR, payload: err.message });
    }
  };
};

// ** FETCH KIDS EVENTS **
export const fetchKidsEvents = () => {
  return async (dispatch) => {
    dispatch({ type: BEFORE_STATE_EVENT });

    try {
      const res = await axios.get(`${API_ROUTE}/dance`);
      dispatch({ type: FETCH_EVENTS, payload: res.data.message });
    } catch (err) {
      dispatch({ type: FETCH_EVENTS_ERROR, payload: err.message });
    }
  };
};

// ** FETCH SOCIAL EVENTS **
export const fetchSocialEvents = () => {
  return async (dispatch) => {
    dispatch({ type: BEFORE_STATE_EVENT });

    try {
      const res = await axios.get(`${API_ROUTE}/dance`);
      dispatch({ type: FETCH_EVENTS, payload: res.data.message });
    } catch (err) {
      dispatch({ type: FETCH_EVENTS_ERROR, payload: err.message });
    }
  };
};

// ** FETCH EVENT BASED ON GIVEN ID **
export const fetchEvent = (id) => {
  return async (dispatch) => {
    dispatch({ type: BEFORE_STATE_EVENT });

    try {
      const res = await axios.get(`${API_ROUTE}/events/${id}`);
      dispatch({ type: GET_EVENT_SUCCESS, payload: res.data.message });
    } catch (err) {
      dispatch({ type: GET_EVENT_ERROR, payload: err.message });
    }
  };
};

// ** FETCH AUTH EVENT ID **
export const fetchAuthEvents = () => {
  return async (dispatch, getState) => {
    const { currentUser } = getState().Auth;

    const res = await axios.get(`${API_ROUTE}/me`);
    let user = res.data;
    dispatch({ type: SET_CURRENT_USER, payload: user });
    try {
      const res = await axios.get(`${API_ROUTE}/user_events/${currentUser.id}`);
      dispatch({ type: FETCH_AUTH_EVENTS, payload: res.data.message });
    } catch (err) {
      dispatch({ type: FETCH_AUTH_EVENTS_ERROR, payload: err.message });
    }
  };
};

export const fetchAllEvents = () => {
  return async (dispatch) => {
    dispatch({ type: BEFORE_STATE_EVENT });

    try {
      const res = await axios.get(`${API_ROUTE}/events`);

      dispatch({ type: FETCH_EVENTS, payload: res.data.message });
    } catch (err) {
      dispatch({ type: FETCH_EVENTS_ERROR, payload: err.message });
    }
  };
};
