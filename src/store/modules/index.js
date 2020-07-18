import { combineReducers } from 'redux';
import authReducer from './auth/reducer/authReducer';
import errorReducer from './auth/reducer/errorReducer';
import { eventReducer } from './events/reducer/eventReducer';
import proReducer from './profile/reducer/proReducer';
import { postsReducer } from './posts/postReducer';
import { upvotesReducer } from './upvotes/upvoteReducer';
import { localEventsReducer } from './localEvents/reducers/locationReducer';

const reducer = combineReducers({
  Auth: authReducer,
  Error: errorReducer,
  Event: eventReducer,
  Profile: proReducer,
  Post: postsReducer,
  Upvote: upvotesReducer,
  LocalEvents: localEventsReducer,
});

export default reducer;
