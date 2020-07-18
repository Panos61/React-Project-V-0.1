import { FETCH_LOCAL_EVENTS_SUCCESS, FETCH_LOCAL_EVENTS_ERROR } from '../index';

export const initState = {
  events: [],
  localEventsError: null,
  isLoading: false,
};

export const localEventsReducer = (state = initState, action) => {
  const { payload, type } = action;

  switch (type) {
    case FETCH_LOCAL_EVENTS_SUCCESS:
      return {
        ...state,
        events: payload,
        isLoading: false,
      };
    case FETCH_LOCAL_EVENTS_ERROR:
      return {
        ...state,
        localEventsError: payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
