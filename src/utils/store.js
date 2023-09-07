import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer'; // Import your rootReducer

const store = configureStore({
  reducer: rootReducer,
  // Add other middleware or options if needed
});

export default store;