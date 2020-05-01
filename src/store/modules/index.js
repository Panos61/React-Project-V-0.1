import { combineReducers } from 'redux';
import authReducer from './auth/reducer/authReducer';
import errorReducer from './auth/reducer/errorReducer';

const reducer = combineReducers({
  Auth: authReducer,
  Error: errorReducer,
});

export default reducer;
