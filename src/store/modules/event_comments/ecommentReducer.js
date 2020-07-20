import {
  EVENT_COMMENT_POST_SUCCESS,
  EVENT_COMMENT_POST_ERROR,
  DELETE_EV_COMMENT_SUCCESS,
  FETCH_EV_COMMENTS_SUCCESS,
  FETCH_EV_COMMENTS_ERROR,
  DELETE_EV_COMMENT_ERROR,
  EDIT_EV_COMMENT_SUCCESS,
  EDIT_EV_COMMENT_ERROR,
} from './types';

export const initState = {
  event_comments: [],
  commentSuccess: false,
  isLoading: false,
};

export const eventCommentsReducer = (state = initState, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_EV_COMMENTS_SUCCESS:
      return {
        ...state,
        event_comments: [
          ...state.event_comments,
          { eventID: payload.eventID, comments: payload.comments },
        ],
        commentSuccess: true,
        isLoading: false,
      };
    case FETCH_EV_COMMENTS_ERROR:
      return {
        ...state,
        commentSuccess: false,
        isLoading: false,
      };
    case EVENT_COMMENT_POST_SUCCESS:
      return {
        ...state,
      };

    default:
      return state;
  }
};
