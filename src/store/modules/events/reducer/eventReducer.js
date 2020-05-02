import {
  BEFORE_STATE_EVENT,
  FETCH_EVENTS,
  FETCH_EVENTS_ERROR,
  FETCH_AUTH_EVENTS,
  GET_EVENT_SUCCESS,
  GET_EVENT_ERROR,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_ERROR,
} from '../eventTypes/eventTypes';

export const initState = {
  events: [],
  authEvents: [],
  event: {},
  eventsError: null,
  isLoading: false,
};

export const eventReducer = (state = initState, action) => {
  const { payload, type } = action;

  switch (type) {
    case BEFORE_STATE_EVENT:
      return {
        ...state,
        eventsError: null,
        isLoading: true,
      };
    case FETCH_EVENTS:
      return {
        ...state,
        events: payload,
        isLoading: false,
      };
    case FETCH_EVENTS_ERROR:
      return {
        ...state,
        eventsError: payload,
        isLoading: false,
      };
    case FETCH_AUTH_EVENTS:
      return {
        ...state,
        eventsError: payload,
        isLoading: false,
      };
    case GET_EVENT_SUCCESS:
      return {
        ...state,
        event: payload,
        eventsError: null,
        isLoading: false,
      };
    case GET_EVENT_ERROR:
      return {
        ...state,
        eventsError: payload,
        isLoading: false,
      };
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        events: [payload, ...state.events],
        authEvents: [payload, ...state.authEvents],
        isLoading: false,
      };
    case CREATE_EVENT_ERROR:
      return {
        ...state,
        eventsError: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
