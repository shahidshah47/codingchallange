import { combineReducers } from 'redux';
import authReducer from './authReducer';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  auth: authReducer, // This creates a 'auth' state in the store managed by authReducer
  data: dataReducer, // This creates a 'data' state in the store managed by dataReducer
});

export default rootReducer;