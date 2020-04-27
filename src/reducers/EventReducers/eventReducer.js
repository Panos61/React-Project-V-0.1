import {
  EVENT_CREATED_SUCCESS,
  BEFORE_EVENT_STATE,
} from '../../actions/EventActions/eventTypes';

export const eventState = {
  events: [],
  event: {},
  isLoading: false,
};

const eventReducer = (state = eventState, action) => {
  switch (action.type) {
    case BEFORE_EVENT_STATE:
      return {
        ...state,
        isLoading: true,
      };

    case EVENT_CREATED_SUCCESS:
      return {
        ...state,
        events: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default eventReducer;
