import { combineReducers } from 'redux';
import authReducer from './auth/reducer/authReducer';
import errorReducer from './auth/reducer/errorReducer';
import { eventReducer } from './events/reducer/eventReducer';
import proReducer from './profile/reducer/proReducer';
import { postsReducer } from './posts/postReducer';

const reducer = combineReducers({
  Auth: authReducer,
  Error: errorReducer,
  Event: eventReducer,
  Profile: proReducer,
  Post: postsReducer,
});

export default reducer;
