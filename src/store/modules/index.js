import { combineReducers } from 'redux';
import authReducer from './auth/reducer/authReducer';
import errorReducer from './auth/reducer/errorReducer';
import { eventReducer } from './events/reducer/eventReducer';

const reducer = combineReducers({
  Auth: authReducer,
  Error: errorReducer,
  Event: eventReducer,
});

export default reducer;
